const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/said7388/developer-portfolio/main/app/assets/lottie/coding.json';
const dest = path.join(__dirname, '..', 'assets', 'lottie', 'code.json');

console.log(`Downloading Lottie animation from ${url}...`);

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            // Verify it's valid JSON
            JSON.parse(data);
            fs.writeFileSync(dest, data, 'utf8');
            console.log(`Successfully saved animation to ${dest}`);
            console.log(`File size: ${data.length} bytes`);
        } catch (e) {
            console.error('Failed to parse downloaded data as JSON:', e.message);
            process.exit(1);
        }
    });

}).on('error', (err) => {
    console.error('Download failed:', err.message);
    process.exit(1);
});
