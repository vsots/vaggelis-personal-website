import * as http from 'http';
import * as fs from 'fs';

const port = 3000;

const whiteList = new Map([
    ["/", "text/html"],
    ["/src/css/index.css", "text/css"],
    ["/src/modules/Header.js", "text/javascript"],
    ["/src/modules/Home.js", "text/javascript"],
    ["/src/modules/SkillsAndProjects.js", "text/javascript"],
    ["/src/modules/Contact.js", "text/javascript"],
    ["/src/modules/Footer.js", "text/javascript"],
    ["/src/modules/footerAdjustOnChange.js", "text/javascript"],
    ["/src/modules/MobileOpenMenu.js", "text/javascript"],
    ["/src/modules/helpers.js", "text/javascript"],
    ["/src/media/icons.js", "text/javascript"],
    ["/node_modules/form-text-sanitizer/dist/index.js", "text/javascript"],
    ["/media/profile_photo.jpg", "image/jpeg"]
]);

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

    const reader = (url) => {
        if (!whiteList.has(url)) {
            goodRes("image/x-icon");
            return;
        }

        const contentType = whiteList.get(url);
        const filePath = req.url === '/' ? './index.html' : ((contentType === 'image/jpeg' ?  './src' : '.') + req.url);

        fs.readFile(filePath, (err, data) => {
            if (err == null) goodRes(contentType, data);
            else {
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.end('Bad Request');
            }
        });
    }

    reader(req.url);
}
