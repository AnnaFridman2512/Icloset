import Mongo from 'mongodb';
import {SingleFile} from '../db/Singlefile.model.mjs';
const {ObjectId} = Mongo;

export function getItems(/**filter={}*/){//get all items with filter by "type" option
    
   // const query = {};

   // if(filter.type){
   //     query.type = new RegExp(filter.type, 'i');// i- Do a case-insensitive search
   //  }

   // let page = 1;
   // let limit = 10;

   // if(filter.page) page = parseInt(filter.page);
   //if(filter.limit) limit = parseInt(filter.limit);

     return SingleFile.find()
    //.paginate(query, { page, limit });
}

export async function getItem(id) {
    return SingleFile
        .findOne({ _id: ObjectId(id) });
}

export function deleteItem(id) {
    return SingleFile.findOneAndDelete({ _id: ObjectId(id) });
}
