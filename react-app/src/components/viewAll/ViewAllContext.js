import React, {useEffect, useState} from 'react';



export const ViewAllContext = React.createContext({
    items: [],//Before fetching the array is empty 
    setItems: () => []
});


export default function ViewAllProvider({children}) {
const [items, setItems] = useState([]);//At the begining we have an empty array of products


useEffect(()=> {//What is written inside this function is going to be executed when the component is rendered
    
    fetch('/api/viewAll')
    .then(response =>response.json())//After fetching take the response (that came as a stirng) json() will convert the string in-to an array of objects.
    .then(itemssArr => setItems(itemssArr))//Takes the items array of objects, that we got above and replaces the empty 'items' array with the one we got from fetch()
    
  }, [items]);
  

    return (
        <ViewAllContext.Provider value={{
            items,
            setItems
        }}>
            {children}    
        </ViewAllContext.Provider>
       
    );
    }    
    