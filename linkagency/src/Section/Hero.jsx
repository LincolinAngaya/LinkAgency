import React from 'react'
// import heroImg from '../assets/images/heroImg.png'
function Hero() {
  return (
   <section className='flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen'>
   <div className='flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20'>
   <h1 className='text-green-600 font-bold text-6x1'>One click solution for static websuite</h1>
   <p className='text-slate-90 text-2xl'>The error message you're seeing indicates a version mismatch between your installed Ruby version and the Ruby version specified in your Gemfile. To resolve this issue, you can do the following:</p>
   <div className='flex justify-center items-center gap-7'>
   <button className='bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>View More</butto></div>
   </div>
   </section>
  )
}

export default Hero