const path = require('path');

var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var {ExtractTextPlugin} = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const PORT = process.env.PORT || 3000;

const SRC_DIR = path.resolve(__dirname, './src');
const DIST_DIR = path.resolve(__dirname, './dist');
const PUBLIC_DIR = path.resolve(__dirname, './public');

//формируем настройки
module.exports = {
 // режим webpack оптимизации
 mode: 'development' === process.env.NODE_ENV ? 'development' : 'production',

 entry: './src/index.js',

 // выходные файлы и чанки
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[hash:8].js',
  sourceMapFilename: '[name].[hash:8].map',
  chunkFilename: '[id].[hash:8].js',
 },

 stats: {
  children: true,
 },

 // module/loaders configuration
 module: {
  rules: [
   {
    test: /\.worker\.js$/,
    use: {loader: 'worker-loader'},
   },
   {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
    },
   },
   {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
   },
   {
    test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/i,
    use: {
     loader: 'url-loader',
     options: {
      limit: 1000,
      name: '[hash].[ext]',
      outputPath: '/assets/resource',
     },
    },
   },

   {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: {
     loader: 'file-loader',
     options: {name: '[name].[ext]', outputPath: '/assets/fonts'},
    },
   },
  ],
 },

 // webpack плагины
 plugins: [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
   title: 'Development',
  }),
  new webpack.DefinePlugin({
   'process.env.NODE_ENV': JSON.stringify('production'),
  }),

  // выделение css во внешний файл таблицы стилей

  new CopyWebpackPlugin({
   patterns: [
    {
     from: path.resolve(__dirname, SRC_DIR + '/assets'),
     to: path.resolve(__dirname, DIST_DIR + '/assets'),
    },
   ],
  }),

  // копирование статических файлов из `src` в `dist`

  new MiniCssExtractPlugin({
   filename: 'styles.css',
  }),
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, './public/index.html'),
   favicon: path.resolve(__dirname, './public/favicon.ico'),
  }),

  // подготовка HTML файла с ресурсами
  new HTMLWebpackPlugin({
   filename: 'index.html',
   template: path.resolve(__dirname, './public/index.html'),
   minify: false,
  }),
  new CleanWebpackPlugin(),
 ],

 // настройка распознавания файлов
 resolve: {
  // расширения файлов
  extensions: ['.js', '.jsx', '.json'],
 },

 // webpack оптимизации
 optimization: {
  runtimeChunk: 'single',
  minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
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
 devtool: 'inline-source-map',
};
