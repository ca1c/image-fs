const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const busboy = require('connect-busboy');

app.use(bodyParser.json());
app.use(busboy({ immediate: true }));
app.use(express.static(path.resolve(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.post('/image', (req, res) => {
    req.busboy.on('file', (name, file, info) => {
        console.log(name);
        console.log(file);
    })
    res.send("ok");
})

app.listen(4000, function() {
    console.log('app listening on port 4000');
});