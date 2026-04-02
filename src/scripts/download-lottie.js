const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/said7388/developer-portfolio/main/app/assets/lottie/coding.json';
const outputPath = path.join(__dirname, '../../src/assets/lottie/code.json');

const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const file = fs.createWriteStream(outputPath);

https.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to get URL: ${response.statusCode}`);
    return;
  }
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download completed successfully.');
  });
}).on('error', (err) => {
  console.error('Error downloading file:', err.message);
  fs.unlink(outputPath, () => {});
});
