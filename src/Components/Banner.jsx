import React from 'react'
import tableimg from "../assets/table.jpg"

const Banner = () => {
  return (
    <div className=' container mx-auto'>
      <div className=" flex justify-between">
      <div className=" w-[19%] rounded-md shadow-lg p-2">
        <div className="">
            <img className=' rounded-md' src={tableimg} alt="" />
        </div>

        <div className=" mt-2">
            <h3>Sofa Tulip Chair (Color)</h3>

        </div>

        <div className=" flex justify-between mt-2">
            <h3>BDT 2200</h3>
            <h4 className=' relative after:absolute after:top-[50%] after:translate-y-[-50%] after:left-0 after:h-[2px] after:w-full after:bg-[#767676]'>MRP 2750</h4>
            <h5>(20% OFF)</h5>
        </div>

        <div className=" flex justify-center items-center my-3 bg-[#262626] text-white rounded-lg">
            <button>Order Now</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Banner
