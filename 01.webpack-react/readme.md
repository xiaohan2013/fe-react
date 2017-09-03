## react和webpack的搭配


1. 工程管理
webpack
webpack-dev-server


2. 状态管理



3. 目录结构
    
    |--README.md
    |--node_modules/
    |--package.json
    |--public
        |--index.html
        |--favicon.ico
    |--src
        |--App.js
        |--App.css
        |--App.test.js
        |--index.css
        |--index.js
        |--logo.svg

4. 支持语言特征和Polyfills
    
babel-core
babel-loader
babel-preset-env
babel-preset-react

* preset-flow
* syntax-jsx
* transform-react-jsx
* transform-react-display-name


5. 样式模块采用sass

node-sass
> 要安装node-sass必须这么安装
npm install --save node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass
sass-loader
style-loader
css-loader
postcss-loader


6. 路由的使用
