import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update_Product() {
  // ------------------------------initilizing variable having useStats
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const paramsId = useParams();
  const navigate=useNavigate();


  useEffect(() => {
    getProductDetails(); // Call the function inside useEffect
  }, []);

  // ----------------------------------getting details of particular product by passing id as parameter in url
  const getProductDetails = async () => {
    const result = await fetch(`http://localhost:4000/products/${paramsId.id}`);
    const data = await result.json();
    setName(data.name);
    setPrice(data.price);
    setCategory(data.category);
    setCompany(data.company);
    console.log(name, price, category, company);
  };
  //---------------------------------------------------updating product details
  const updateProduct = async () => {
    const result = await fetch(`http://localhost:4000/update/${paramsId.id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({ name, price, category, company }), 
    });

    const data = await result.json();
    if(data.modifiedCount===1){
      alert("product updated successfully");
      navigate("/")
    }
  };

  return (
    <div className="product">
      <h1>Update product</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Enter product name"
      />
      {/* {error && !name && <span className='invalid-input'><b>Enter valid name</b></span>} */}
      {/*!!!   we are doing "and operation" exexution    !!! */}

      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        type="text"
        placeholder="Enter product price"
      />
      {/* {error && !price && <span className='invalid-input'><b>Enter valid price</b></span>} */}

      <input
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        type="text"
        placeholder="Enter product category"
      />
      {/* {error && !category && <span className='invalid-input'><b>Enter valid category</b></span>} */}

      <input
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        type="text"
        placeholder="Enter product company"
      />
      {/* {error && !company && <span className='invalid-input'><b>Enter valid company</b></span>} */}

      <button onClick={updateProduct}>Submit</button>
    </div>
  );
}

export default Update_Product;
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// function Update_Product() {
//     const [name,setName] = useState("");
//     const [price,setPrice] = useState("");
//     const [category,setCategory] = useState("");
//     const [company,setCompany] = useState("");
//     // const [error,setError] = useState(false);

// //-------------------------now we have to call use effect to get data after loading the page
//     const params = useParams();
//     useEffect(()=>{
//         getProductDetails();
//     },[]);

//     const getProductDetails=async()=>{
//       let result = await fetch(`http://localhost:4000/products/${params.id}`)
//       result = await result.json();
//       console.log(result)
//     }

//     const updateProduct=async()=>{
//       console.log(name,price,category,company)
//       // if(!name || !price || !category || ! company){
//         // setError(true);
//       //   return false;
//       // }
//       // else{
//       //   console.log(name, price,category,company)
//       // }
//         // // console.log(name, price, category,company);
//         // const data = await fetch("http://localhost:4000/add-product",({
//         //     method:'POST',
//         //     headers: {'Content-Type':"application/json"},
//         //     body : JSON.stringify ({ name , price, category,userId,company})
//         // }))
//         // const result = await data.json();
//         // if (result)
//         // alert('!!! Your item has been added!!!');
//         // // console.log('result product added ',result);
//     }

//   return (
//     <div className='product' >
//         <h1>Update product</h1>
//         <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter product name'/>
//         {/* {error && !name && <span className='invalid-input'><b>Enter valid name</b></span>} */}
//         {/*!!!   we are doing "and operation" exexution    !!! */}

//         <input onChange={(e)=>setPrice(e.target.value)} type="text" placeholder='Enter product price'/>
//         {/* {error && !price && <span className='invalid-input'><b>Enter valid price</b></span>} */}

//         <input onChange={(e)=>setCategory(e.target.value)} type="text" placeholder='Enter product category'/>
//         {/* {error && !category && <span className='invalid-input'><b>Enter valid category</b></span>} */}

//         <input onChange={(e)=>setCompany(e.target.value)} type="text" placeholder='Enter product company'/>
//         {/* {error && !company && <span className='invalid-input'><b>Enter valid company</b></span>} */}

//         <button onClick={updateProduct}>Submit</button>

//     </div>
//   )
// }

// export default Update_Product;
