import mongoose from 'mongoose';
import {singleFileSchema} from './Singlefile.model.mjs'

const CombinationSchema = new mongoose.Schema({
    combination: [
        {
            "typeof": {
                type: String,
                enum:["top", "butttom", 'shoes']
            },
            "productType": String,
            "imageUrl": String
        },
    ]
});

export const Combination = mongoose.model('Combination', CombinationSchema);