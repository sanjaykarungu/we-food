import React from 'react'
import imageData from "./utils/menu.json";
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div className=''>    
      <div className="w-350">
        <div className="grid sm:grid-cols-6 overflow-hidden  mt-20 ml-40">
          {imageData.map((item, index) => (
            <div key={index} className="">

              <Link
               key={index}
               to={`/${item.path}`}
              >

              <img
                src={item.src}
                className='w-40 h-40 hover:scale-115 transition-transform duration-300'
              />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Menu
