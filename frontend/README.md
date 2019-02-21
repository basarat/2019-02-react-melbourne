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