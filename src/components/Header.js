import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';



function Header() {

 const [entry, setEntry] = useState("");

 
function changeInput(e){
   setEntry(e.target.value);
  
}


  return (
    <div className="bg-white border-[1px] shadow-2xl px-10 py-5 w-[1100px] ml-[222px] mt-4 ">
      <div>
        <h1 className="text-3xl">Filter list of the movie item</h1>

      </div>
      <div>
        <div className="flex space-x-4 items-center">

          <input type="text" className="p-2 mt-2 border-2 border-black " placeholder="Search via" onInput={changeInput} />
          <SearchIcon  />
        </div>
        <div className='space-x-4 mt-2'>

          <button className="px-3 py-1 bg-red-500 rounded-md shadow-xl text-md text-xl font-medium text-white hover:scale-110 duration-300">Apply</button>
          <button className="px-3 py-1 bg-red-500 rounded-md shadow-xl text-md text-xl font-medium text-white hover:scale-110 duration-300">Clear</button>

        </div>
      </div>

       
    </div>



  )

}

export default Header




















