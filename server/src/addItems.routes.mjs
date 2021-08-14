import express from 'express';
import multer from 'multer';//multer - for uploading pics

export const addItemsRouter = express.Router();

//const picCategory = ["top", "bottom", "shoues"];//Which category the pic belongs to?

const fileStorageEngine = multer.diskStorage({//"diskStorage" is a multer function, it exepts an object with two values: 
    destination: (req, file, cb) => {//"destination" function is the first value.
        cb(null,"../addedItems/");//"destination" function runs the "cb" function. "cb" functions first parametter is an error, we set it to "null"
                                //"cb"s second parameter is the path to the folder in which we want to store the pics
    },
    filename:(req, file, cb)=>{//"filename"  function is the second value.
        cb(null, `${Date.now()} -- ${file.originalname}`);//Using Date.now to add to .origanalname to make it uniqe (returns the number of milliseconds elapsed since January 1, 1970)
    }
});


const upload = multer({storage: fileStorageEngine});//"storage"- tells multer where to save the files


addItemsRouter.post("/", upload.single("image"), (req, res) => {//The middleware upload.single('image')- tells multer that only one file is going to be sent, 
    console.log(req.file);
    res.send('Uploaded :)');
});

