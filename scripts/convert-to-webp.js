const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Lee todos los archivos en el directorio
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  // Filtra solo archivos de imagen
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  // Convierte cada imagen a WebP
  imageFiles.forEach(file => {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, `${path.parse(file).name}.webp`);

    sharp(inputPath)
      .webp({ quality: 80 }) // Ajusta la calidad según necesites (0-100)
      .toFile(outputPath)
      .then(info => {
        console.log(`Convertido: ${file} -> ${path.parse(file).name}.webp`);
        console.log(`Tamaño original: ${fs.statSync(inputPath).size} bytes`);
        console.log(`Nuevo tamaño: ${info.size} bytes`);
        console.log('-------------------');
      })
      .catch(err => {
        console.error(`Error al convertir ${file}:`, err);
      });
  });
});
