import './AddItems.css'; 
import React, { useState } from "react";


export default function AddItems(){
    const [fileData, setFileData] = useState();
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
    const [type, setType] = useState('');//top bottom shoes else 
    const [productType, setProductType] = useState('');//top pants shorts dress skirt shoes
    const [topSelect, setTopSelect] = useState(false);
    const [bottomSelect, setBottomSelect] = useState(false);
    const [shoesSelect, setShoesSelect] = useState(false);
    const [elseSelect, setElseSelect] = useState(false);



    const handleTypechange = (e) => {
      setType(e.target.value);
      const type = e.target.value;
      if(type === "top" ){
        setTopSelect(true);
        setBottomSelect(false);
        setShoesSelect(false);
        setElseSelect(false);
      }else if (type === "bottom"){
        setBottomSelect(true);
        setTopSelect(false);
        setShoesSelect(false);
        setElseSelect(false);
      }else if (type === "shoes"){
        setShoesSelect(true);
        setBottomSelect(false);
        setTopSelect(false);
        setElseSelect(false);
      }else if (type === "else") {
        setElseSelect(true);
        setShoesSelect(false);
        setBottomSelect(false);
        setTopSelect(false);        
      }
    }

    const handleProductTypechange = (e) => {
      setProductType(e.target.value)
      
    }

    const fileChangeHandler = (e) => {
      setError(false);//clear error message when nre item added
      const selected = e.target.files[0];//The target property of the Event interface is a reference to the object onto which the event was dispatched.
                                          //.files[0] - Accessing the first selected file
      const allowedTypes =["image/png", "image/jpeg", "image/jpg"];

      if(selected && allowedTypes.includes(selected.type)){
        let reader = new FileReader();
        reader.onloadend = () =>{
          setImgPreview(reader.result);//show the img that is selected
        }
          reader.readAsDataURL(selected);
        }else{
          setError(true);
      }

       setFileData(selected);                                     
       if(selected){
        let reader = new FileReader();
        reader.onloadend = () =>{
          setImgPreview(reader.result);//show the img that is selected
        }
        reader.readAsDataURL(selected);
      }else{
        setError(true);
      }
      };

     

    const onSubmitHandler = (e) => {
        e.preventDefault();//prevent submit button default behavior
         
    // Handle File Data from the state Before Sending
     const data = new FormData();//The FormData() constructor creates a new FormData object.
     
    data.append("file", fileData);//Adding a key/value pair to "data" using FormData.append:
    data.append("type", type);
    data.append("productType", productType);


     fetch("http://localhost:8080/addItems", {
       method: "POST",
      body: data,
   })
     .then((res) => {
       console.log(`Uploaded`);
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
      <select value={type} onChange={handleTypechange} >
                <option>-- select an option -- </option>
                <option>top</option>
                <option>bottom</option>
                <option>shoes</option>
                <option>else</option>
            </select>                
            <div>{type}</div>


        <select value={productType} onChange={handleProductTypechange} >
                <option>-- select an option -- </option>
                <option disabled={topSelect ? false : true}>top</option>
                <option disabled={bottomSelect ? false : true} >pants</option>
                <option disabled={bottomSelect ? false : true}>shorts</option>
                <option  disabled={bottomSelect ? false : true}>skirt</option>
                <option disabled={elseSelect ? false : true}>dress</option>
                <option disabled={shoesSelect ? false : true}>shoes</option>
            </select>                
            <div>{productType}</div>
            
        <div className="container2">
        {error && <p className="errorMsg">File not supported</p>}
      <div
       className="imgPreview"
       style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/contain `: "#131313"}} //if we choose am img- show preview, else show background color
       >
        {!imgPreview && (
          <>
          <label htmlFor="fileUpload" className="customFileUpload">Click to add item :)</label>
          <input type="file" id="fileUpload" onChange={fileChangeHandler} />
          <span>(jpg, jpeg or png)</span>
          </>
        )}
      </div>
      {/*if imgPreview exists we render the button*/}
      {imgPreview && (
        <button onClick={()=> setImgPreview(null)}>Select different item</button>
      )}
    </div>
        <button type="submit">Submit File to Backend</button>

      </form>
    </div>
  </div>  
                                                                 
    );

    }                                     