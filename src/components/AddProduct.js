import React, { useState } from 'react'

function AddProduct() {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState(false);

    let userId = (JSON.parse(sessionStorage.getItem('user')))._id;

    
    const addProduct=async()=>{
      if(!name || !price || !category || ! company){
        setError(true);
        return false;
      }
        // console.log(name, price, category,company);
        const data = await fetch("http://localhost:4000/add-product",({
            method:'POST',
            headers: {'Content-Type':"application/json"},
            body : JSON.stringify ({ name , price, category,userId,company})
        }))
        const result = await data.json();
        if (result)
        alert('!!! Your item has been added!!!');
        // console.log('result product added ',result);
    }

  return (
    <div className='product' >
        <h1>Add product</h1>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter product name'/>
        {error && !name && <span className='invalid-input'><b>Enter valid name</b></span>}
        {/*!!!   we are doing and operation to exexution    !!! */}

        <input onChange={(e)=>setPrice(e.target.value)} type="text" placeholder='Enter product price'/>
        {error && !price && <span className='invalid-input'><b>Enter valid price</b></span>}

        <input onChange={(e)=>setCategory(e.target.value)} type="text" placeholder='Enter product category'/>
        {error && !category && <span className='invalid-input'><b>Enter valid category</b></span>}

        <input onChange={(e)=>setCompany(e.target.value)} type="text" placeholder='Enter product company'/> 
        {error && !company && <span className='invalid-input'><b>Enter valid company</b></span>}

        <button onClick={addProduct}>Submit</button>

    </div>
  )
}

export default AddProduct
