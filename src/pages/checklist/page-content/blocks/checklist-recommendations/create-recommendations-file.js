const fs = require('browserify-fs');

function createRecommendationsFile() {
  fs.writeFile('~/test-recommendations.txt', 'Hello Node.js', (err) => {
    err ? alert(err) : alert('The file was recorded.');
  });
}

export { createRecommendationsFile };
