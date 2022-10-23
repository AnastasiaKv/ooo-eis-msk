//объявляем переменные
const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpackConfig = require('./webpack.config');

var cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
var jsName = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

//формируем настройки
module.exports = {
 mode: 'development',
 entry: ['./src/index.jsx'],
 plugins: [
  new HtmlWebpackPlugin({
   title: 'Development',
   template: 'public/index.html',
  }),
 ],
 output: {
  path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
  publicPath: '/',
  filename: jsName, // название создаваемого файла
 },
 devServer: {
  historyApiFallback: true,
  static: {
   directory: path.join(__dirname, '/'),
  },
  port: 3000,
  open: true,
 },
 module: {
  loaders: [
   {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
   },
   {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader'),
   },
   {test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif'},
   {test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
   {test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png'},
   {test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml'},
   {test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1'},
   {test: /\.jsx?$/, loader: 'babel', exclude: [/node_modules/, /public/]},
   {test: /\.json$/, loader: 'json-loader'},
  ],
 },
 devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
 devServer: {
  headers: {'Access-Control-Allow-Origin': '*'},
 },
 module: {
  rules: [
   //загрузчик для jsx
   {
    test: /\.jsx?$/, // определяем тип файлов
    exclude: /(node_modules)/, // исключаем из обработки папку node_modules
    loader: 'babel-loader', // определяем загрузчик
    options: {
     presets: ['@babel/preset-react'], // используемые плагины
    },
   },
   {
    test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
    type: 'src/assets/',
    loader: '`url-loader`?limit=100000',
   },
   {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
     fallback: 'style-loader',
     use: ['css-loader', 'sass-loader'],
    }),
   },
   //img loader
   {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: './src/asset/img',
    use: {
     loader: 'file-loader',
     options: {
      name: './src/assets/img/[name].[ext]',
     },
    },
   },

   // шрифты и SVG
   {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: './src/asset/fonts',
   },
  ],
  plugins: [
   new webpack.DefinePlugin({
    'process.env': {
     BROWSER: JSON.stringify(true),
     NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
   }),
   new ExtractTextPlugin(cssName),
   new CleanWebpackPlugin(),
   new ExtractTextPlugin({filename: 'css/style.css', disable: false, allChunks: true}),
   new CopyPlugin([{from: './src/assets/img', to: 'img'}]),
   new CopyPlugin([{from: './src/assets/fonts', to: 'fonts'}]),
   new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: './public/index.html',
    filename: 'index.html',
   }),
  ],
 },
};
