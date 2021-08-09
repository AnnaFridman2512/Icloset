import loadJson from 'load-json-file';

let likes = loadJson.sync('./data/likes.json'); //liked.json is going to be an array of liked item objects

//export function getLiked() {
//    return combination;
//}

export function getLikes(id){//get liked combinations by the id of the user that liked them
    const [ combination ] = combinations.filter(combination => combination.id == id);
    return combination;
}

export function addLikes(combination){//Should be executed when clicking on ♥ icon on nav 
    likes.push(combination);
}

export function deleteCombination(){//need help with this one - has to dlelete shown combination from liked.json when "delete" button is clicked 
    likes = likes.filter(combination => combination);//
}

