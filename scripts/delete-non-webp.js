const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Lee todos los archivos en el directorio
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  // Filtra los archivos que no son WebP
  const nonWebpFiles = files.filter(file => 
    !file.toLowerCase().endsWith('.webp')
  );

  // Elimina cada archivo que no sea WebP
  nonWebpFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error al eliminar ${file}:`, err);
      } else {
        console.log(`Eliminado: ${file}`);
      }
    });
  });
});
