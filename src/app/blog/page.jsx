import Image from "next/image";
import React from "react";
import Card from "../components/Card.jsx";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products" , {next:{revalidate:10}});
  if(!response.ok)
  {
    throw new Error('Api call failed');
    
  }
  return response.json();
};


const page = async() => {
    const products=await fetchProducts()
    const product=products.products
    
  return (
    <div className="w-full h-full ">
      <div className="cards flex flex-wrap gap-5 justify-center items-center p-5">
        {
            product.map((product)=>{
               return <Card products={product}/>
            })
        }
      </div>
    </div>
  );
};

export default page;
