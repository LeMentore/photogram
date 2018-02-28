import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/App'
import serverTemplate from './serverTemplate'

const app = express();

app.get('/', (request, response) => {
    const appString = renderToString(<App/>);
    response.send(serverTemplate(appString))
});

const port = 3001;
app.listen(port);
console.log(`localhost:${port}`);