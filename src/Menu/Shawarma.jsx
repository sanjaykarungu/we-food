import React, { useState } from 'react';
import imageData from './utilss/shawarma.json';

const Shawarma = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(imageData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      setFilteredData(imageData);
    } else {
      const filtered = imageData.filter(item => 
        item.name.toLowerCase().includes(term) ||
        (item.place && item.place.toLowerCase().includes(term)) ||
        (item.price && item.price.toString().toLowerCase().includes(term))
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="w-full min-h-screen bg-orange-50 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-4 md:px-20">
        <div>
          <h1 className='font-bold text-4xl text-orange-800'>Shawarma</h1>
          <p className='font-bold text-xl mt-4 text-orange-700'>Taste these delectable classics, delicious shawarma to make your day.</p>
        </div>
        
        {/* Search Box */}
        <div className="mt-6 md:mt-0 md:w-96">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-orange-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Search shawarma by name, place or price..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="pb-10 mt-10">
        {filteredData.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-orange-700">No shawarma found matching your search.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
            {filteredData.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:shadow-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                
                <div className="p-4">
                  <p className="text-xl font-bold text-orange-800">{item.name}</p>
                  <p className="text-lg text-yellow-600 flex items-center mt-2">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    {item.rating}
                  </p>
                  {item.place && <p className="text-gray-600 mt-2">{item.place}</p>}
                  <div className="text-orange-700 font-semibold mt-2">₹{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shawarma;