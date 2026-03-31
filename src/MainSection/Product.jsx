import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Product = () => {
    const [data,setData] = useState([])
    const fetchData = async()=>{
        let res = await axios.get("/Data.json")
        console.log(res.data);
        setData(res.data)
    }
    useEffect(()=>{
         fetchData()
    },[])
  return (
    <>
     <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 min-h-screen">

      {data.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center p-2 justify-center">
              <img src={item.img} alt="" />
            </div>
            <span className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-600">
              {item.badge}
            </span>
          </div>
          <div className='flex items-start flex-col m-2 '>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-500 text-sm mb-4  text-start">
            {item.description}
          </p>
          <h3 className="text-2xl font-bold mb-4">
            ${item.price}
            <span className="text-sm text-gray-400">/{item.billing}</span>
          </h3>
          </div>
          <ul className="mb-6 space-y-2">
            {item.features.map((f, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                ✔ {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 hover:opacity-90">
            Buy Now
          </button>

        </div>
      ))}

    </div>
    </>
  )
}

export default Product
