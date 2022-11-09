import Generator from 'react-router-sitemap-generator';
import Router from './component/Router'; //import your react router component

const generator = new Generator('https://www.eis-msk.ru', Router(), {
 lastmod: new Date().toISOString().slice(0, 10),
 changefreq: 'monthly',
 priority: 0.8,
});
generator.save('./public/sitemap.xml');
