const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/said7388/developer-portfolio/main/app/assets/lottie/coding.json';
const targetPath = path.join(__dirname, '../assets/lottie/code.json');

const dir = path.dirname(targetPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const file = fs.createWriteStream(targetPath);
https.get(url, function(response) {
  if (response.statusCode !== 200) {
    console.error('Failed to download file. Status code:', response.statusCode);
    process.exit(1);
  }
  response.pipe(file);
  file.on('finish', function() {
    file.close();
    console.log('Download completed successfully to ' + targetPath);
  });
}).on('error', function(err) {
  fs.unlink(targetPath);
  console.error('Error downloading file:', err.message);
  process.exit(1);
});
