import express from 'express'
import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import App from './src/App'
import serverTemplate from './serverTemplate'

const app = express();

app.get('/', (request, response) => {
    const context = {}
    const appString = renderToString(
        <StaticRouter location={request.url} context={context}>
            <App/>
        </StaticRouter>
    );

    if (context.url) {
        response.writeHead(301, {
            Location: context.url
        })
        response.end()
    } else {
        response.write(serverTemplate(appString))
        response.end()
    }
    // response.send(serverTemplate(appString))
});

app.use('/assets', express.static('./src/assets'))
app.use('/static', express.static('./static'))

const port = 3001;
app.listen(port);
console.log(`localhost:${port}`)