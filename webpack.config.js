const path = require('path');

var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const PORT = process.env.PORT || 3000;

const SRC_DIR = path.resolve(__dirname, './src');
const DIST_DIR = path.resolve(__dirname, './dist');
const BUILD_DIR = path.resolve(__dirname, './build');

//формируем настройки
module.exports = {
 // режим webpack оптимизации
 mode: 'development' === process.env.NODE_ENV ? 'development' : 'production',

 entry: {app: path.resolve(__dirname, './src/index.js')},

 // выходные файлы и чанки
 output: {
  filename: 'bundle.js',
  publicPath: '/',
  chunkFilename: 'js/[id].[chunkhash].js',
  path: path.resolve(__dirname, 'dist'),
  
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
    test: /\.(s*)css$/,
    use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader'],
   },
   {
    test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
    use: {
     loader: 'url-loader',
     options: {
      limit: 1000,
      name: '[hash].[ext]',
      outputPath: '/dist/assets',
     },
    },
   },

   {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
   },
   //img loader
   {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: './src/assets/img',
    use: {
     loader: 'file-loader',
     options: {
      name: '/src/assets/img/[name].[ext]',
     },
    },
   },
   // шрифты и SVG
   {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: '/src/assets/',
   },

   {
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    use: {
     loader: 'file-loader',
     options: {name: '[name].[ext]', outputPath: '/dist/assets/fonts/'},
    },
   },
   {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
     fallback: 'style-loader',
     use: 'css-loader',
     publicPath: '/dist/css',
    }),
   },
   {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
     fallback: 'style-loader',
     use: 'less-loader',
     publicPath: '/dist/css',
    }),
   },
  ],
 },

 // webpack плагины
 plugins: [
  new webpack.ProgressPlugin(),
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
  new MiniCssExtractPlugin({
   filename: 'css/[name].[hash].css',
   chunkFilename: 'css/[id].[hash].css',
  }),

  // копирование статических файлов из `src` в `dist`

  new MiniCssExtractPlugin({
   filename: 'dist/css/styles.css',
  }),
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, '/public/index.html'),
   favicon: path.resolve(__dirname, '/public/favicon.ico'),
  }),

  // подготовка HTML файла с ресурсами
  new HTMLWebpackPlugin({
   filename: 'index.html',
   template: path.resolve(__dirname, DIST_DIR + '/index.html'),
   minify: false,
  }),
  new CleanWebpackPlugin(),
 ],

 // настройка распознавания файлов
 resolve: {
  // расширения файлов
  extensions: ['.js', '.jsx', '.scss'],
 },

 // webpack оптимизации
 optimization: {
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
 devtool: 'source-map',
};
