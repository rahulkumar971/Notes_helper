import React from 'react'

const NavBar = () => {

    
  return (
    <div className="flex justify-between m-4  text-gray-200">
        <div className='ml-4 mt '>
            <h4 className='text-4xl font-semibold text-gray-200'>Examly</h4>
        </div>

        <div className=' flex flex-row gap-4 mr-4 '>
         <div className="cursor-pointer bg-white/8 rounded-2xl border py-2 px-6 text-center text-sm transition-all text-400  hover:bg-white/20 inset-shadow-sm inset-shadow-gray-400 "> 
            <button className='cursor-pointer'>Downloads</button>
        </div>
        <div className=" bg-white/8 rounded-2xl border py-2 px-6 text-center text-sm transition-all text-400  hover:bg-white/20 inset-shadow-sm inset-shadow-gray-400 cursor-pointer ">
            <button className='cursor-pointer'>Sign In</button>
            
        </div>
        </div>
       
         
    </div>
  )
}

export default NavBar