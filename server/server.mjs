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
app.use(express.urlencoded()); //Parse URL-encoded bodies


app.use(cors());

app.use('/api/addedItems', express.static(path.join(__dirname, 'addedItems')));




app.use('/api/users', usersRouter);
app.use('/api/likedItems', likedItemsRouter);
app.use('/api/collection', collectionRouter)
app.use('/api/addItems', addItemsRouter);
app.use(express.static('../react-app/build'));



app.listen(8080, () => {
    connect();
});

console.log(`Server up and running on localhost:8080`);