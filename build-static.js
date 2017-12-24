var scrape = require('website-scraper');

const config = {
  urls: ['http://localhost:4200/'],
  directory: './site/',
  recursive: true,
  maxDepth: 0,
  urlFilter: function(url) {
    return url.indexOf('http://localhost:4200/') === 0;
  },
  filenameGenerator: 'bySiteStructure'
};

scrape(config).then((result) => {
    console.log('scrapped!');
});