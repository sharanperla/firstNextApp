import React from 'react'
import Link from 'next/link';
   

const Header = () => {
  return (
    <div className=' bg-black/80 py-4 px-4 rounded-lg text-white flex justify-between'>
       nav bar
       <div className='flex gap-12'>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/blog">blog</Link>
       </div>
    <div className='bg-white text-black px-4 py-1 rounded-lg'>signin</div>
    </div>
  )
}

export default Header
