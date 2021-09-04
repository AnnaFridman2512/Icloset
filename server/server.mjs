import express from 'express';
import cors from 'cors';
import path from 'path';



const __dirname = path.resolve();

import { usersRouter } from './src/users.routes.mjs';
import { likedItemsRouter } from './src/likedItems.routes.mjs';
import { addItemsRouter } from './src/addItems.routes.mjs';
import { connect } from './db/connect.mjs';
import { collectionRouter } from './src/findCollection.mjs'

const app = express();


app.use(express.json()); //Used to parse JSON bodies
app.use('/addedItems', express.static(path.join(__dirname, 'addedItems')));
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(cors());


app.use('/users', usersRouter);
app.use('/likedItems', likedItemsRouter);
app.use('/collection', collectionRouter)
app.use('/addItems', addItemsRouter);
app.use(express.static('../react-app/build'));

//CRUD - create read apdate delete
//Protocol CRUD Servers: REST (Representational state transfer)
//Rest URL /[object name]s - this is how we write the routs, name of the object in numerous way 'product'- /products



app.listen(8080, () => {
    connect();
});

console.log(`Server up and running on localhost:8080`);