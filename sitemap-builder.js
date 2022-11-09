require('babel-register')({
 presets: ['es2015', 'react'],
});
const router = require('./src/router').default;
const Sitemap = require('react-router-sitemap').default;
new Sitemap(router).build('https://www.eis-msk.ru').save('./public/sitemap.xml');
