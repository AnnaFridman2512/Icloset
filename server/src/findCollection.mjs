import loadJson from 'load-json-file';
import express from 'express';
export const collectionRouter = express.Router();




let items = loadJson.sync('./data/items.json');
collectionRouter.get('/', (req, res) => {

    res.send(findCollection())

})

const getRendomItem = (type) => {
    return type[Math.floor(Math.random() * type.length)]

}
export const findCollection = () => {
    const topCollection = items.filter(item => item.type === "top");
    const buttomColection = items.filter(item => item.type === "buttom");
    const shoseCollection = items.filter(item => item.type === "shoes");
    const newCollection = [getRendomItem(topCollection), getRendomItem(buttomColection), getRendomItem(shoseCollection)]
        // console.log(newCollection)
    return newCollection
}