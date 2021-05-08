import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/index";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const { getInitialData } = App;
  const data = await getInitialData();
  const ReactAppString = renderToString(<App {...data}></App>);

  const html = `
    <html>
        <head>
            <title>meme posts (SSR)</title>
            <style>
            table, th, td {
                border: 1px solid black;
              }
            </style>
            <script>
              window.__my__fucking__props__=${JSON.stringify(data)}
            </script>
        </head>
        <body>
            <div id="root">${ReactAppString}</div>
            <script src="client.js"></script>
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
