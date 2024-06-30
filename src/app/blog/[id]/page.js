import Image from 'next/image'
import React from 'react'
const productDetail=async (id)=>{
    const response=  await fetch(`https://dummyjson.com/products/${id}`)
    return response.json()
  }
const BlogDetails = async({params}) => {
    let {id}=params
    let blogDetail=await productDetail(id);
    

  return (
    <div className='flex flex-col justify-center items-center'>
      this is details of blog {blogDetail.id}
      <Image className='' src={blogDetail.images[0]}  width={450} height={450}/>
      <div className='max-w-[60%]'>
        <h2 className=''>{blogDetail.description}</h2>
      </div>
    </div>
  )
}

export default BlogDetails
