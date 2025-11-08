import React from 'react'
import imageData from "./utils/groceries.json";
import {Link} from 'react-router-dom'


const Groceries = () => {
  return (
    <div className='0'>    
      <div className="">
        <div className='flex mt-20'>
            <div className=' ml-22 font-bold text-2xl'>
                <h1>Shop groceries on Instamart</h1>
            </div>
            <div className='flex gap-2'>
                <h1 className='text-2xl rounded-2xl ml-240 pl-1 pr-1 bg-gray-200'>🡨</h1>
                <h1 className='text-2xl rounded-2xl pl-1 pr-1 bg-gray-200'>🡪</h1>
               
            </div>
        </div>
        <div className="grid sm:grid-cols-7 w-350 overflow-hidden mt-5 ml-22 ">
          {imageData.map((item, index) => (
            <div key={index} className="">
                
              <Link
              key={index}
               to={`/${item.path}`}>
              <img
                src={item.src}
                
                className='w-38 h-48 mt-5 hover:scale-115 transition-transform duration-300'
              />
              </Link>

              <div className="p-2 text-center w-38 ">
                <p className="text-gray-800 text-1xl font-bold">
                {item.name}
                </p>
              </div>  
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Groceries
