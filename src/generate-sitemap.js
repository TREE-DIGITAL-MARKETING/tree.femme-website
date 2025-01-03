import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';

// Define your website base URL
const BASE_URL = 'https://tree.it.com';

// Define your website pages
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/howitworks', changefreq: 'monthly', priority: 0.7 },
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  pages.forEach((page) => sitemap.write(page));
  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  fs.writeFileSync('./public/sitemap.xml', sitemapData.toString());
};

generateSitemap()
  .then(() => console.log('Sitemap generated successfully.'))
  .catch((err) => console.error('Error generating sitemap:', err));
