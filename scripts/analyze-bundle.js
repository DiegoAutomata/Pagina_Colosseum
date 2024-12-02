const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const fs = require('fs');

const nextDir = path.join(__dirname, '../.next');

// Función para encontrar todos los archivos JS en un directorio
function findJsFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            results = results.concat(findJsFiles(filePath));
        } else if (file.endsWith('.js')) {
            results.push(filePath);
        }
    }
    
    return results;
}

// Encontrar todos los archivos JS en el directorio .next
const entries = {};
const jsFiles = findJsFiles(path.join(nextDir, 'static'));
jsFiles.forEach(file => {
    const name = path.relative(nextDir, file);
    entries[name] = file;
});

// Configuración del analizador
const config = {
    mode: 'production',
    entry: entries,
    output: {
        path: path.join(__dirname, '../analyze'),
        filename: '[name]',
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.join(__dirname, '../analyze/report.html'),
            openAnalyzer: true,
            generateStatsFile: true,
            statsFilename: path.join(__dirname, '../analyze/stats.json'),
            defaultSizes: 'gzip',
        }),
    ],
    performance: {
        hints: false
    }
};

require('webpack')(config).run((err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err || stats.toString('errors-only'));
    } else {
        console.log('Análisis completado. Abriendo reporte en el navegador...');
    }
});
