import React, {useCallback,useState} from 'react';



export const LikedItemsContext = React.createContext({
    combination: [],//Before fetching the array is empty 
    setCombination: () => [],
    combinationsList: () => [],
    deleteCombination: () => [],
    currentIndex:0,
    setCurrentIndex: () => [],
    isLikedItem: false,
    setIsLikedItem: () => [],
    addlikedItem: () => [],
    swipeLeft: () => [],
    swipeRight: () => []
});


export default function LikedItemsProvider({children}) {
const [combination, setCombination] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [isLikedItem, setIsLikedItem] = useState(false);


  const combinationsList = useCallback(()=> { //fetch all liked items(combination) 
    fetch('/api/likedItems')
    .then(response =>response.json())//After fetching take the response (that came as a stirng) json() will convert the string in-to an array of objects.
    .then(c => setCombination(c))//Takes the items array of objects, that we got above and replaces the empty 'items' array with the one we got from fetch()  
  }, []);

    // DELETE request
    const deleteCombination = (_id) => {
      fetch(`/api/likedItems/${_id}`, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(setCombination(combination.filter((item) => item._id !== _id)));
      if (combination.length - 1 === currentIndex) {
        setCurrentIndex(currentIndex - 1);
      }
  
    };

  const addlikedItem = (combination) => {
    // console.log("combination", combination.map((c) => c._id));
    fetch("/api/likedItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(combination.map((c) => c._id)),
    })
      .then((res) => res.json())
      .then((data) => {
         setCombination([...combination, data]);
      });

    setIsLikedItem(true); //change the liked item button state to true (The heart icon is marked)
  };

    //swipe liked items carousel left
    const swipeLeft  = ()=>{
      setCurrentIndex( currentIndex - 1 < 0 ? combination.length - 1 : currentIndex - 1);
    }

    //swipe liked items carousel right
    const swipeRight = () => {
      setCurrentIndex(currentIndex + 1 <= combination.length - 1? currentIndex + 1: 0);
}

    return (
        <LikedItemsContext.Provider value={{

            combination,
            setCombination,
            combinationsList,
            deleteCombination,
            currentIndex,
            setCurrentIndex,
            isLikedItem,
            setIsLikedItem,
            addlikedItem,
            swipeLeft,
            swipeRight

        }}>
            {children}    
        </LikedItemsContext.Provider>
       
    );
    }    
    