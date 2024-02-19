import Image from 'next/image'
import React from 'react'

import image1 from '../../assets/image-1.png'
import image2 from '../../assets/image-2.png'

export default function Blog() {
  return (
    <>
        <section className='w-full max-w-[860px] px-8 border-r-2 border-[#E8E8E8]'>
            <div className='font-lato text-xs text-[#666666]'>22 Jan 2024 | By John</div>
            <div className='font-playfair text-black text-3xl font-semibold max-w-[600px] my-3'>Event Planning Essentials: From Catering To Decor</div>
            <Image src={image1} className='w-full mt-' />
            <p className='font-lato text-lg text-[#1A1A1A] my-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div className='flex gap-5 my-10'>
              <Image src={image2} className='w-[45%]' />
              <p className='font-lato text-lg text-[#000000] my-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
            </div>
            <h2 className='font-playfair text-xl text-[#345B4D] font-semibold'>Comments</h2>
            <textarea name="" id="" cols="30" rows="5" className='w-full rounded-lg border-[#1A1A1A] border-[1px] p-4 my-3' placeholder='Add to the discussion'></textarea>
            <button className='bg-[#1A1A1A] text-white px-5 py-2 rounded-md'>Submit</button>
        </section>
    </>
  )
}
