```sh
npm init -y
npm i webpack webpack-cli webpack-dev-server
npm i typescript ts-loader
npx tsc --init
```

`tsconfig.json`
```json
jsx: react
include: 'src'
```

`package.json`
```json
  "scripts": {
    "build": "webpack -p",
    "start": "webpack-dev-server -d --content-base ./public"
  },
```

`webpack.config.js`
```js
module.exports = {
  entry: './src/app/app.tsx',
  output: {
    path: __dirname + '/public',
    filename: 'build/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
```


`public/index.html`
```html
html>body>div#root
<script src="./build/bundle.js"></script>
```

`src/app/app.tsx`
```js
document.write('hello world');
```


```sh
npm i react react-dom @types/react @types/react-dom
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('root')
);
```

```js
npm run build
open public/index.html
```

# Now lets add some backend

We already have `typescript`.
```js
npm i ts-node-dev concurrently @types/node
```

`tsconfig.server.json`
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "lib"
  },
  "exclude": [
    "src/app"
  ]
}
```

`src/server/server.ts`
```ts
import http from 'http';

http.createServer((req,res) => {
  res.write('Hello world');
  res.end('\n');
}).listen(3000);
```

`package.json`
```
    "build:fe": "webpack -p",
    "start:fe": "webpack-dev-server -d --content-base ./public",
    "build:be": "tsc -p tsconfig.server.json",
    "start:be": "ts-node-dev src/server/server.ts",
    "build": "npm run build:be && npm run build:fe",
    "start": "concurrently \"npm run start:be\" \"npm run start:fe\""
```

# Peumal 
`src/common/peumal.ts`
```ts
export function peumal() {
  return 'Peumal';
}
```

`src/app/app.tsx`
```ts
<div>{peumal()}</div>,
```

`src/server/server.ts`
```ts
console.log(peumal());
```
