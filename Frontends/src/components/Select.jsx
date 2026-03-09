import React from 'react'

const Select = () => {
  return (
    <div className="flex items-center justify-center  ">
      
      <div className="flex gap-8 bg-white/5 backdrop-blur-md  rounded-2xl shadow-lg border border-white/10">
        
        <div className="relative w-30">
          <select
            className="w-full appearance-none bg-transparent border border-gray-400/30 rounded-xl px-4 py-2 pr-10 text-sm text-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 cursor-pointer"
          >
            <option value="" className="text-gray-800">Degree</option>
            <option value="bca" className="text-gray-800">BCA</option>
            <option value="bcom" className="text-gray-800">BCOM</option>
            <option value="bba" className="text-gray-800">BBA</option>
          </select>

    
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            ▼
          </span>
        </div>

        
        <div className="relative w-28">
          <select
            className="w-full appearance-none bg-transparent border border-gray-400/30 rounded-xl px-4 py-2 pr-10 text-sm text-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 cursor-pointer"
          >
            <option value="" className="text-gray-800">Sem</option>
            <option value="1" className="text-gray-800">1</option>
            <option value="2" className="text-gray-800">2</option>
            <option value="3" className="text-gray-800">3</option>
            <option value="4" className="text-gray-800">4</option>
            <option value="5" className="text-gray-800">5</option>
            <option value="6" className="text-gray-800">6</option>
          </select>

          {/* Custom Arrow */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            ▼
          </span>
        </div>

      </div>
    </div>
  )
}

export default Select