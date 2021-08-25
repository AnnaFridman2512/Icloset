import './AddItems.css'; 
import React, { useState } from "react";

export default function AddItems(){
    const [fileData, setFileData] = useState();

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);//The target property of the Event interface is a reference to the object onto which the event was dispatched.
                                      //.files[0] - Accessing the first selected file 

      };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();//prevent submit button default behavior
        
    // Handle File Data from the state Before Sending
     const data = new FormData();//The FormData() constructor creates a new FormData object.

    data.append("file", fileData);//Adding a key/value pair to "data" using FormData.append:
    

     fetch("http://localhost:8080/addItems", {
       method: "POST",
      body: data,
   })
     .then((res) => {
       console.log("Uploaded:)");
     })
    .catch((err) => {
      console.log(err.message);
     });
       
     };

    return (
        
      <div className="add-items">
        <div className="container">
      <h1>Add items</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Submit File to Backend</button>
      </form>
       </div>
     </div>  
                                                                 
    );

    }                                     