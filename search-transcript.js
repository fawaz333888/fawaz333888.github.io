const fs = require('fs');

const data = fs.readFileSync('C:\\Users\\A412DA\\.gemini\\antigravity\\brain\\fc7d1c68-4415-4490-a808-a4185126e395\\.system_generated\\logs\\transcript.jsonl', 'utf8');
const lines = data.split('\n');
const found = lines.filter(l => l.toLowerCase().includes('pelayan toko'));

found.forEach(l => {
  try {
    const obj = JSON.parse(l);
    if(obj.type === 'USER_INPUT' || obj.source === 'USER') {
      console.log('USER said:', obj.content);
    } else {
      console.log('Other log:', obj.content.substring(0, 500));
    }
  } catch(e) {}
});
