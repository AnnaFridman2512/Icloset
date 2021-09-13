import loadJson from 'load-json-file';

let liked = loadJson.sync('./data/likedItems.json'); //liked.json is going to be an array of liked item objects


export function getLiked() {
   return liked;
}

// export function getLIked(id){//get liked combinations by the id of the user that liked them
//     const [ combination ] = combinations.filter(combination => combination.id == id);
//     return combination;
// }

export function getLIked(id){//get liked combinations by the id of the user that liked them
    const  {combination} = liked.filter(item => item.id == id)[0];
    console.log(combination)
    return combination;
}

export function addLiked(combination){//Should be executed when clicking on ♥ icon on nav 
    liked.push(combination);
}

export function deleteCombination(){//need help with this one - has to dlelete shown combination from liked.json when "delete" button is clicked 
    liked = liked.filter(combination => combination);//
}

