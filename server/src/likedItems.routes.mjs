import express from 'express';

import { deleteCombination } from './likedItems.service.mjs';
import { addLiked } from './likedItems.service.mjs';
import {getLIked} from './likedItems.service.mjs';



export const likedRouter = express.Router();


//Create post 
likedRouter.post("/", (req, res) => {
    res.send(addLiked(req.body));
});

//Get liked combinations by user id
likedRouter.get("/:id", (req, res) => {
     res.send(getLIked(req.params.id));
});




//Delete combination
likedRouter.delete("/", (req, res) => {
    res.send(deleteCombination(req.params.id));
});