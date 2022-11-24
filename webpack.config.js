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
  filename: 'bundle.[hash].js',
  publicPath: '/dist',
  chunkFilename: 'js/[id].[chunkhash].js',
  path: path.resolve(process.cwd(), 'dist'),
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
   {
    test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
    type: 'src/assets/css',
    use: {
     loader: '`url-loader`?limit=100000',
    },
   },

   //img loader
   {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: './src/assets/img',
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
    type: './src/assets/fonts',
   },

   {
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    use: {
     loader: 'file-loader',
     options: {name: '[name].[ext]', outputPath: 'fonts/'},
    },
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
   //    {test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif'},
   //    {test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
   //    {test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png'},
   //    {test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml'},
   //    {test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1'},
   //    {test: /\.jsx?$/, loader: 'babel', exclude: [/node_modules/, /public/]},
  ],
 },

 // webpack плагины
 plugins: [
  new webpack.ProgressPlugin(),
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  //     new MiniCssExtractPlugin({
  //      filename: 'css/[name].[hash].css',
  //      chunkFilename: 'css/[id].[hash].css',
  //     }),
  // выделение css во внешний файл таблицы стилей
  new MiniCssExtractPlugin({
   filename: 'dist/styles.css',
  }),

  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, DIST_DIR + '/index.html'),
   favicon: path.resolve(__dirname, 'dist/favicon.ico'),
  }),

  new webpack.DefinePlugin({
   'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new CopyWebpackPlugin({
   patterns: [
    {
     from: path.resolve(__dirname, './public/index.html'),
     to: path.resolve(__dirname, DIST_DIR + '/index.html'),
    },
   ],
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
  // подготовка HTML файла с ресурсами
  new HTMLWebpackPlugin({
   filename: 'index.html',
   template: path.resolve(__dirname, DIST_DIR + '/index.html'),
   minify: false,
  }),
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
