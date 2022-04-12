const http = require('http');
const fs = require('fs');
const path = require('path'); //para criar o melhor caminho independente do sistema

http
  .createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url;
    const filePath = path.join(__dirname, 'public', file);
    const extname = path.extname(filePath);

    const allowedFileTypes = [
      '.html',
      '.css',
      '.js',
      '.png',
      '.jpg',
      'jpeg',
      '.webp',
    ];
    const allowed = allowedFileTypes.find((item) => item === extname);

    if (!allowed) return;

    fs.readFile(filePath, (err, content) => {
      if (err) throw err;

      res.end(content);
    });
  })
  .listen(5000, () => console.log('Servidor Ativo'));
