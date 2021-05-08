# react-ssr-reddit-meme
For demo, no SSR framework but renderToString(server) + hydrate(client)

## Install & Develop
```sh
$ yarn #install
$ yarn dev #automatically watch & re-build
```

## What's new?

No SSR framework, I create a `getInitialData` in page-level component, and call in server-side, and pass to `window.__my__fucking__props__` to hydrate react app, for demo usage.

## Build and release
```
$ yarn build
$ yarn start
```

## Demo
https://react-ssr-reddit-meme.herokuapp.com/

You can curl (to check ssr) or click (to check react hook works)
