import * as http from 'http';
import * as fs from 'fs';

const port = 3000;

const server = http.createServer(handler);

server.listen(port, () => {
    console.log("Website Running at port: ", port);
});

function handler(req, res) {
    const includes = (ext) => req.url.includes(ext) ? req.url : null;

    const reader = (contentType) => {
        const isImage = (contentType === "image/jpeg") || (contentType === "image/svg+xml")
        const filePath = (isImage ? './src' : '.') + (req.url === '/' ? '/index.html' : req.url);

        fs.readFile(filePath, (err, data) => {
            if (err == null) {
                res.writeHeader(200, {'Content-Type' : contentType});
                res.write(data);
                res.end();
            } else {
                console.error(err);  
            }
        });
    }

    switch (req.url) {
        case includes('.js'):
            reader('text/javascript');
            break;
        case includes('.mjs'):
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
