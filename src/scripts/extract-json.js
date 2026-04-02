const fs = require('fs');
const path = require('path');

const sourcePath = 'C:\\Users\\mdabs\\.gemini\\antigravity\\brain\\8de4c133-0755-44a2-a4b0-9fa1ada7c440\\.system_generated\\steps\\397\\content.md';
const targetPath = path.join(__dirname, '../../src/assets/lottie/code.json');

try {
  const content = fs.readFileSync(sourcePath, 'utf8');
  const jsonStartIndex = content.indexOf('{');
  if (jsonStartIndex === -1) {
    console.error('No JSON found in source file.');
    process.exit(1);
  }
  const jsonContent = content.substring(jsonStartIndex);
  
  // Create directory if it doesn't exist
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(targetPath, jsonContent);
  console.log('Successfully wrote Lottie JSON to ' + targetPath);
} catch (error) {
  console.error('Error processing file:', error.message);
  process.exit(1);
}
