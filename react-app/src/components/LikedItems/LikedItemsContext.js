import React, {useCallback,useState} from 'react';



export const LikedItemsContext = React.createContext({
    combination: [],
    setCombination: () => [],
    likedCombinationArr: [],
    setLikedCombinationArr: () => [],
    combinationsList: () => [],
    deleteLikedCombination: () => [],
    currentIndex:0,
    setCurrentIndex: () => [],
    isLikedCombination: false,
    setIsLikedCombination: () => [],
    addlikedCombination: () => [],
    swipeLeft: () => [],
    swipeRight: () => []
});


export default function LikedItemsProvider({children}) {
const [combination, setCombination] = useState([]);
const [likedCombinationArr, setLikedCombinationArr] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [isLikedCombination, setIsLikedCombination] = useState(false);


  const combinationsList = useCallback(()=> { //fetch all liked combinations
    fetch('/api/likedItems')
    .then(response =>response.json())
    .then(c => setLikedCombinationArr(c))
  }, []);

    // DELETE request
    const deleteLikedCombination = (_id) => {
      fetch(`/api/likedItems/${_id}`, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(setLikedCombinationArr(likedCombinationArr.filter((comb) => comb._id !== _id)));
      if (combination.length - 1 === currentIndex) {
        setCurrentIndex(currentIndex - 1);
      }
  
    };

  const addlikedCombination = (combination) => {
    fetch("/api/likedItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(combination),
    })
      .then((res) => res.json())
      .then((data) => setLikedCombinationArr(data))

      setLikedCombinationArr([likedCombinationArr , ...combination])
      setIsLikedCombination(true); //change the liked item button state to true (The heart icon is marked)
      combinationsList();
  };

    //swipe liked items carousel left
    const swipeLeft  = ()=>{
      setCurrentIndex( currentIndex - 1 < 0 ? likedCombinationArr.length - 1 : currentIndex - 1);
    }

    //swipe liked items carousel right
    const swipeRight = () => {
      setCurrentIndex(currentIndex + 1 <= likedCombinationArr.length - 1? currentIndex + 1: 0);
}

    return (
        <LikedItemsContext.Provider value={{

            combination,
            setCombination,
            likedCombinationArr,
            setLikedCombinationArr,
            combinationsList,
            deleteLikedCombination,
            currentIndex,
            setCurrentIndex,
            isLikedCombination,
            setIsLikedCombination,
            addlikedCombination,
            swipeLeft,
            swipeRight

        }}>
            {children}    
        </LikedItemsContext.Provider>
       
    );
    }    
    