import React from 'react'
import {aboutgrids} from '../Exports'

function About() {
  return (
 <section id='services' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 h-fit px-7 py-4 lg:px-12'>
 <div className='flex justify-center items-start flex-col gap-8 lg:w-1/2'>
 <h1 className='text-green-800 font-bold text-6x1'> Elevating Businesses with Creative Digital Solutions.</h1>
 <p className='text-slate-05 text-2x1'>Digital agency crafting tailored solutions. Elevate credibility, expand reach, and boost sales with our creative technology expertise.</p>
 <div className='flex justify-center item-center gap-7'>
 <button className='bg-green-800 text-white px-4 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>Read More</button>
 </div>
 <div className='flex justify-between items-center w-full lg:w-1/2 flex-wrap'>
 {aboutgrids.map((grid)=> (

   <div key={grid.label} className='w-full lg:w-1/2'>
   <AboutGrid {...grid} />
   </div>
 ))}
 
 </div>
 </div>
 
 </section>
  )
}

export default About
