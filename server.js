import express from "express";
import React from 'react';
import { renderToString } from "react-dom/server";
import App from "./src/index";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const ReactAppString = renderToString(<App></App>);
  const html = `
    <html>
        <head>
            <title>meme posts (SSR)</title>
        </head>
        <body>
            <div id="root">
                ${ReactAppString}
            </div>
        </body>
    </html>
    
    `;
  res.status(200).send(html);
});

// for public/client.js
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
