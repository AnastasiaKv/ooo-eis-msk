//объявляем переменные
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//формируем настройки
module.exports = {
 entry: {main: './src/index.js'},
 mode: 'development',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'js/[name].js',
 },
 resolve: {
  extensions: ['.ts', '.tsx', '.js', '.json'],
 },
 module: {
  rules: [
   {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
   {test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader'}},
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
    type: '/src/asset/img',
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
 },
 stats: {
  colors: true,
 },
 plugins: [
  new CleanWebpackPlugin(),
  new ExtractTextPlugin({filename: 'css/style.css', disable: false, allChunks: true}),
  new CopyPlugin([{from: 'src/img', to: 'img'}]),
  new HtmlWebpackPlugin({
   inject: false,
   hash: true,
   template: './src/index.html',
   filename: 'index.html',
  }),
 ],
};
