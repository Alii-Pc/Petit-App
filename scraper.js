const https = require('https');
const fs = require('fs');

https.get('https://wonder-theme-petit-demo.myshopify.com/products/petit', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const matches = data.match(/https:\/\/[^\s"'<>]+\.mp4/gi);
    if(matches) {
      console.log(Array.from(new Set(matches)));
    } else {
      console.log('No mp4 found');
    }
  });
});
