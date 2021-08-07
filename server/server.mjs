import express from 'express';


                              
import {itemsRouter} from './src/items.routes.mjs';
import {usersRouter} from './src/users.routes.mjs';
import {likedItemsRouter} from './src/likedItems.routes.mjs';
import {addItemsRouter} from './src/addItems.routes.mjs';
const app = express();


app.use(express.json());//Used to parse JSON bodies
app.use('/items', itemsRouter);
app.use('/users', usersRouter);
app.use('/likedItemsRouter', likedItemsRouter);
app.use('/addItems', addItemsRouter);
app.use(express.static('../react-app/build'));

//CRUD - create read apdate delete
//Protocol CRUD Servers: REST (Representational state transfer)
//Rest URL /[object name]s - this is how we write the routs, name of the object in numerous way 'product'- /products




app.listen(8080);

console.log('Server up and running on localhost:8080');