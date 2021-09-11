import express from 'express';
import { getLiked } from './likedItems.service.mjs';

import { deleteCombination } from './likedItems.service.mjs';
import { addLiked } from './likedItems.service.mjs';
import {getLIked} from './likedItems.service.mjs';



export const likedItemsRouter = express.Router();


//Create post 
likedItemsRouter.post("/", (req, res) => {
    res.send(addLiked(req.body));
});

//Get liked combinations by user id
// likedItemsRouter.get("/:id", (req, res) => {
//      res.send(getLIked(req.params.id));
// });
likedItemsRouter.get("/", (req, res) => {
    res.send(getLiked());
});


likedItemsRouter.get("/:id", (req, res) => {
    res.send(getLIked(req.params.id));
});




//Delete combination
likedItemsRouter.delete("/", (req, res) => {
    res.send(deleteCombination(req.params.id));
});