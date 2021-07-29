import loadJson from 'load-json-file';

export let items = loadJson.sync('./data/items.json'); //Saving the data  from the wanted file to a variable 

export function getItems() {
   return items;
}

export function getItem(){//need help with this. Should get items by theyr description (by tugs)
    const [ item ] = items.filter(item => item == item);
    return item;
}
export function addItem(item){
    items.push(item);
    return items;
}

export function deleteItem(){//need help with this- on click on delete button in "search" component item should be deleted
    items = items.filter(item => item);

}


