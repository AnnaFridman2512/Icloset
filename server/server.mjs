
import express from 'express';
import multer from 'multer';
import cors from 'cors';
                              
import {usersRouter} from './src/users.routes.mjs';
import {likedItemsRouter} from './src/likedItems.routes.mjs';
import {addItemsRouter} from './src/addItems.routes.mjs';
const app = express();


app.use(express.json());//Used to parse JSON bodies
app.use(cors());
app.use('/users', usersRouter);
app.use('/likedItems', likedItemsRouter);
//app.use('/addItems', addItemsRouter);
app.use(express.static('../react-app/build'));

//CRUD - create read apdate delete
//Protocol CRUD Servers: REST (Representational state transfer)
//Rest URL /[object name]s - this is how we write the routs, name of the object in numerous way 'product'- /products

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./addedItems/"); //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
     cb(null, Date.now() + "--" + file.originalname);
    },
  });

  const upload = multer({ storage: fileStorageEngine });


  app.post("/addItems", upload.single("image"), (req, res) => {
   console.log(req.file);
    res.send("Uploaded :)");
  });
  
app.listen(8080);

console.log('Server up and running on localhost:8080');