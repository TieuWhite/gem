const fs = require('fs');
const path = require('path');

const imageDir = path.join(dirname, '../public/character');
const outputPath = path.join(dirname, '../public/character.json');

const getImages = (dir, baseDir = dir) => {
  let images = [];
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      images = images.concat(getImages(itemPath, baseDir));
    } else if (/.(png|jpe?g|gif|svg)$/.test(itemPath)) {
      images.push(itemPath.replace(baseDir, ''));
    }
  });

  return images;
};

const images = getImages(imageDir);
fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));

console.log(Generated ${outputPath});