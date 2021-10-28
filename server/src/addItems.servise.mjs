import fs from 'fs';
import multer from 'multer';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import { SingleFile } from "../db/Singlefile.model.mjs";
import { getItems } from './viewAll.service.mjs';
import dontenv from 'dotenv'
dontenv.config();



aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_ID,
    region: process.env.REGION
});
const s3 = new aws.S3();


export async function singleFileUpload(req, res, next) {
    try {
        console.log('req.file.location', req.file.location);
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.location,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2), //0.00
            type: req.body.type,
            productType: req.body.productType,

        })

        await SingleFile.findOne({ fileName: file.fileName }, function(err, existingItem) {
            if (existingItem === null) {
                file.save(); //creating SingleFile if item doesn't exist
                res.status(201).send(`${file.fileName} Uploaded:) `);

            } else {
                existingItem = null;
                res.send(`${file.fileName} item already exists!`);
                // fs.unlink(file.filePath, (err) => {
                //     if (err) console.log('error');
                // });

            }

        })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//filter for a spesific file we want to store
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true) //callback will return true if the file type is correct
    } else {
        cb(null, false);
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index];
}

// const storage = multer.diskStorage({ //"diskStorage" is a multer function, it exepts an object with two values: 
//     destination: (req, file, cb) => { //"destination" function is the first value.
//         cb(null, 'addedItems'); //"destination" function runs the "cb" function. "cb" functions first parametter is an error, we set it to "null"
//         //"cb"s second parameter is the path to the folder in which we want to store the pics
//     },
//     filename: (req, file, cb) => { //"filename"  function is the second value.
//         cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname); //Using Date() to add to .origanalname to make it uniqe 
//     }
// });

const storage = multerS3({
    s3: s3,
    bucket: 'webgraphic',
    key: function(req, file, cb) {
        console.log(file);
        cb(null, file.originalname); //use Date.now() for unique file keys
    }
})


//filter for a spesific file we want to store
const checkIfExists = (req, file, cb) => {
    if (file.fileName !== null) {
        cb(null, true) //callback will return true if the file name doesn't exist
    } else {
        cb(null, false);
    }
}

export const upload = multer({
    storage: storage, //"storage"- tells multer where to save the files
    fileFilter: filefilter,
    checkIfExists: checkIfExists
});