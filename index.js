import * as http from 'http';
import * as fs from 'fs';

const port = 3000;

const server = http.createServer(handler);

server.listen(port, () => {
    console.log("Website Running at port: ", port);
});

function handler(req, res) {
    const goodRes = (contentType, data) => {
        res.writeHead(200, {'Content-Type' : contentType});
        if (data) res.write(data);
        res.end();
    }

    const reader = (contentType) => {
        if (contentType === 'image/x-icon') {
            goodRes(contentType);
            return;
        }

        const isImage = (contentType === "image/jpeg") || (contentType === "image/svg+xml")
        const filePath = (isImage ? './src' : '.') + (req.url === '/' ? '/index.html' : req.url);

        fs.readFile(filePath, (err, data) => {
            if (err == null) goodRes(contentType, data);
            else {
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.end('Bad Request');
            }
        });
    }

    const includes = (ext) => req.url.includes(ext) ? req.url : null;

    switch (req.url) {
        case (includes('.js') || includes('.mjs')):
            reader('text/javascript');
            break;
        case includes('.css'): 
            reader('text/css');
            break;
        case includes('.jpg'):
            reader('image/jpeg');
            break;
        default: 
            reader(req.url === '/' ? 'text/html' : 'image/x-icon');
    }
}
