import express from 'express';

import { deleteCombination } from './likes.service.mjs';
import { addLikes } from './likes.service.mjs';
import {getLikes} from './likes.service.mjs';



export const likesRouter = express.Router();


//Create post 
likesRouter.post("/", (req, res) => {
    res.send(addLikes(req.body));
});

//Get liked combinations by user id
likesRouter.get("/:id", (req, res) => {
     res.send(getLikes(req.params.id));
});




//Delete combination
likesRouter.delete("/", (req, res) => {
    res.send(deleteCombination(req.params.id));
});