//объявляем переменные
const path = require('path');

var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PORT = process.env.PORT || 3000;

const SRC_DIR = path.resolve(__dirname, './src');
const DIST_DIR = path.resolve(__dirname, './dist');
//формируем настройки
module.exports = {
 // режим webpack оптимизации
 mode: 'development' === process.env.NODE_ENV ? 'development' : 'production',
 entry: ['./src/index.js'],

 // выходные файлы и чанки
 output: {
  path: path.resolve(__dirname, '.dist'),
  filename: 'bundle.[hash].js',
  publicPath: './dist',
 },
 // module/loaders configuration
 module: {
  rules: [
   {
    test: /\.js$/,
    enforce: 'pre',
    loader: 'eslint-loader',
   },
   //загрузчик для jsx
   {
    test: /\.jsx?$/, // определяем тип файлов
    exclude: /(node_modules)/, // исключаем из обработки папку node_modules
    loader: 'babel-loader', // определяем загрузчик
    use: ['babel-loader'],
    options: {
     presets: ['@babel/preset-react'], // используемые плагины
    },
   },
   {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
   },
   {
    test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
    type: 'src/assets/css',
    loader: '`url-loader`?limit=100000',
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
   new ExtractTextPlugin({
    filename: 'bundle.css',
    disable: false,
    allChunks: true,
   }),

   // шрифты и SVG
   {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: './src/asset/fonts',
   },

   {
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
    options: {name: '[name].[ext]', outputPath: 'fonts/'},
   },
   {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
     fallback: 'style-loader',
     use: 'css-loader',
     publicPath: '/dist',
    }),
   },
   {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
     fallback: 'style-loader',
     use: 'less-loader',
     publicPath: '/dist',
    }),
   },
   {test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif'},
   {test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
   {test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png'},
   {test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml'},
   {test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1'},
   {test: /\.jsx?$/, loader: 'babel', exclude: [/node_modules/, /public/]},
  ],
 },

 // webpack плагины
 plugins: [
  new webpack.UglifyJsPlugin({
   sourceMap: true,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new HTMLWebpackPlugin({
   template: 'public/index.html',
   favicon: 'public/favicon.ico',
  }),
  new webpack.DefinePlugin({
   'process.env': {
    BROWSER: JSON.stringify(true),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
   },
  }),
  // выделение css во внешний файл таблицы стилей
  new MiniCssExtractPlugin({
   filename: 'build/styles.css',
  }),

  // подготовка HTML файла с ресурсами
  new HTMLWebpackPlugin({
   filename: 'index.html',
   template: path.resolve(__dirname, SRC_DIR + '/index.html'),
   minify: false,
  }),
  // копирование статических файлов из `src` в `dist`
  new CopyWebpackPlugin({
   patterns: [
    {
     from: path.resolve(__dirname, SRC_DIR + '/assets'),
     to: path.resolve(__dirname, DIST_DIR + '/assets'),
    },
   ],
  }),
 ],

 // настройка распознавания файлов
 resolve: {
  // расширения файлов
  extensions: ['.js', '.jsx', '.scss'],
 },

 // webpack оптимизации
 optimization: {
  splitChunks: {
   cacheGroups: {
    default: false,
    vendors: false,

    vendor: {
     chunks: 'all', // both : consider sync + async chunks for evaluation
     name: 'vendor', // имя чанк-файла
     test: /node_modules/, // test regular expression
    },
   },
  },
 },

 devServer: {
  //   headers: {'Access-Control-Allow-Origin': '*'},
  host: 'localhost',
  historyApiFallback: true,
  port: PORT,
  open: true,
  hot: true,
  overlay: true,
 },

 // генерировать source map
 devtool: 'source-map',
};
