import express from 'express';
import path from 'path';

import { usersRouter } from './src/users.routes.mjs';
import { likedItemsRouter } from './src/likedItems.routes.mjs';
import { addItemsRouter } from './src/addItems.routes.mjs';
import { connect } from './connect.mjs';
import { collectionRouter } from './src/findCollection.mjs'

const app = express();




const __dirname = path.resolve();




app.use(cors());

app.use(express.json()); //Used to parse JSON bodies
app.use('/addedItems', express.static(path.join(__dirname, 'addedItems')));
app.use(express.urlencoded()); //Parse URL-encoded bodies



app.use('/users', usersRouter);
app.use('/likedItems', likedItemsRouter);

app.use('/collection', collectionRouter)
    //app.use('/addItems', addItemsRouter);
app.use('/addItems', addItemsRouter);
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






app.listen(8080, () => {
    connect();
});

console.log(`Server up and running on localhost:8080`);