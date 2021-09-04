import multer from 'multer';

import { SingleFile } from "../db/Singlefile.model.mjs";
export  async function singleFileUpload(req, res, next){
    try{
        console.log(req.body);
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2),//0.00
            type:req.body.type,
            productType:req.body.productType,

        })   
        await file.save();//creating SingleFile collection

        res.status(201).send('File Uploaded:)');
    } catch (error) {
        res.status(400).send(error.message);
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

const storage = multer.diskStorage({ //"diskStorage" is a multer function, it exepts an object with two values: 
    destination: (req, file, cb) => { //"destination" function is the first value.
        cb(null, "addedItems"); //"destination" function runs the "cb" function. "cb" functions first parametter is an error, we set it to "null"
        //"cb"s second parameter is the path to the folder in which we want to store the pics
    },
    filename: (req, file, cb) => { //"filename"  function is the second value.
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname); //Using Date() to add to .origanalname to make it uniqe 
    }
});


//filter for a spesific file we want to store
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true) //callback will return true if the file type is correct
    } else {
        cb(null, false);
    }
}

export const upload = multer({ storage: storage, fileFilter: filefilter }); //"storage"- tells multer where to save the files