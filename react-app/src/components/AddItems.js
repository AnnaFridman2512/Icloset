import './AddItems.css'; 
import React, { useState } from "react";

export default function AddItems(){
    const [fileData, setFileData] = useState();

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);//The target property of the Event interface is a reference to the object onto which the event was dispatched.
      };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();//prevent submit button default behavior
        
    // Handle File Data from the state Before Sending
     const data = new FormData();//The FormData() constructor creates a new FormData object.

    data.append("image", fileData);//Adding a key/value pair to "data" using FormData.append:
    

    fetch("http://localhost:8080/single", {
        method: "POST",
        body: data,
      })
        .then((res) => {
          console.log("File sent Successfuly");
        })
        .catch((err) => {
          console.log(err.message);
        });
       
    };

    return (
        
      <div className="add-items">
      <h1>Add item</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Submit File to Backend</button>
      </form>

        </div>  
                                                                 
    );

    }                                     