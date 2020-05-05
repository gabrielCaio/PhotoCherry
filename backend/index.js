//----------------------------------Imports--------------------------------------//

const express = require('express')
const router = require('./src/routes')
const morgan = require('morgan')
const multer = require('multer')
const mongoose = require('mongoose')
const gridfs = require('gridfs-stream')
const crypto = require('crypto')
const fs = require('fs')

//---------------------------Connection With MongoDB-----------------------------//

mongoose.connect("mongodb+srv://caio:swordfish@photocherry-xe9yj.mongodb.net/test?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
})

const conn = mongoose.connection

gridfs.mongo = mongoose.mongo

conn.on('error', console.error.bind(console, 'connection error:'));

//----------------------------------Starting App with express------------------------//

const app = express()

app.use(express.json())
// app.use(express.urlencoded({ extended:true }))
app.use(morgan('dev'))

//-------------------------Save Images on mongoDB by gridFS lib-----------------------//

conn.once('open', () => {
    const gfs = gridfs(conn.db, mongoose.mongo)
    
    // const a = crypto.randomBytes(16)

    app.post('/write/:name', async (req, res) => {

        var dbFilename =  await req.params.name
        var local_file = './src/img/' + dbFilename

        var writestream = gfs.createWriteStream({ filename: dbFilename });

        fs.createReadStream(local_file).pipe(writestream);

        writestream.on('close', function (file) {
            res.send('File Created : ' + file.filename);
        });
    });
    
    app.get('/read/:name', async (req, res) => {

        var dbFilename =  await req.params.name
        var local_file = './src/img/' + dbFilename

        gfs.exist({ filename: dbFilename }, function (err, file) {
            if (err || !file) {
                res.send('File Not Found');
            } else {
                var readstream = gfs.createReadStream({ filename: dbFilename });
                readstream.pipe(res);
            }
        });
    });
    
    app.delete('/delete/:id', async (req, res) => {

        var dbFilename =  await req.params.name
        var local_file = './src/img/' + dbFilename

        gfs.exist({ filename: dbFilename }, function (err, file) {
            if (err || !file) {
                res.send('File Not Found');
            } else {
                gfs.remove({ filename: dbFilename }, function (err) {
                    if (err) res.send(err);
                    res.send('File Deleted');
                });
            }
        });
    });
})

//---------------------------Using Router and Listen to Port:3333--------------------//

app.use('/', router)

app.listen(3333)