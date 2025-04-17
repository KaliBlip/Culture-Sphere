import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const panoramas = [
  {
    name: 'taj-mahal.jpg',
    url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=2000'
  },
  {
    name: 'petra.jpg',
    url: 'https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=2000'
  },
  {
    name: 'machu-picchu.jpg',
    url: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=2000'
  }
];

const downloadDir = path.join(__dirname, '..', 'public', 'panoramas');

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(downloadDir, filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(downloadDir, filename));
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting panorama downloads...');
  for (const panorama of panoramas) {
    try {
      await downloadFile(panorama.url, panorama.name);
    } catch (error) {
      console.error(`Error downloading ${panorama.name}:`, error);
    }
  }
  console.log('All downloads completed!');
}

downloadAll(); 