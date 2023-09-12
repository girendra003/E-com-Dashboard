import React, { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom';
export default function Product() {
  const [item, setItem] = useState([]); // Initialize as an empty array

  useEffect(() => {
    getProducts();
  }, []);

// -------------------------------------api to get products
  const getProducts = async () => {
    const result = await fetch("http://localhost:4000/products");
    const data = await result.json();
    if(data.length>=1){
      setItem(data);
    }else{
      setItem([])
    }
  };
// -------------------------------------api to delete products
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:4000/delete/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };
  const navigate = useNavigate();
  const navToUpdate=(id)=>{
    navigate(`/update/${id}`);
  }
  return (
    <>
      <div className="product-list">
        <h1>Your products are here</h1>
        <ul>
          <li>S.No</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Operation</li>
        </ul>

        {item.map((value, index) => {
          return (
            <ul key={value._id}>
              <li>{index + 1}</li>
              <li>{value.name}</li>
              <li>{value.price}</li>
              <li>{value.category}</li>
              <li>
                <button id="btp" onClick={(e) => deleteProduct(value._id)}>
                  Delete
                </button>
                <button id="btp" onClick={(e)=>navToUpdate(value._id)} >
                  Update
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
