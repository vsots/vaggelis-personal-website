import * as http from 'http';
import * as fs from 'fs';

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer(handler);

server.listen(port, host, () => {
    console.log(`Website Running at http://${host}:${port}/`);
});

function handler(req, res) {
    const reader = (contentType) => {
        fs.readFile('./public' + (req.url === '/' ? '/index.html' : req.url), (err, data) => {
            if (err == null) {
                res.writeHeader(200, {'Content-Type' : contentType});
                res.write(data);
                res.end();
            } else {
                console.error(err);
            }
        });
    }


    const includes = (ext) => req.url.includes(ext) ? req.url : null;

    switch (req.url) {
        case includes('.js'):
            reader('text/javascript');
            break;
        case includes('.css'): 
            reader('text/css');
            break;
        case includes('.jpeg'):
            reader('image/jpeg');
            break;
        case includes('.svg'): 
            reader('image/svg+xml');
            break;
        default: 
            reader('text/html');
    }
}
