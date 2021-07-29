import express from 'express';

import { deleteItem } from './items.service.mjs';
import { addItem } from './items.service.mjs';
import {getItems} from './items.service.mjs';
import {getItem} from './items.service.mjs';

export const itemsRouter = express.Router();


//Get all items
itemsRouter.get("/" , (req, res) => {
    res.send(getItems());
});

//Create item 
itemsRouter.post("/",(req, res) => {
    res.send(addItem(req.body));
                           
});


itemsRouter.get("/:description", (req, res) => {//{//need help with this. Should get items by theyr description (by tugs)
    res.send(getItem(req.params.description));
});




//Delete single item
itemsRouter.delete("/:description", (req, res) => {//need help with this- on click on delete button in "search" component item should be deleted
    res.send(deleteItem(req.params.description));
});