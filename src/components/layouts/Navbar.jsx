import React, { useState } from 'react';
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi"
import SideMenu from "./SideMenu";

const Navbar = ({activeMenu}) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  return (
    <div className="flex gap-5 bg-black border border-b border-gray-800/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">  {/* bg-white  border-gray-200/50*/}
      <button
        className="block lg:hidden text-white" // text-black
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }} 
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>
       <h2 className="text-lg font-medium text-white">Task Manager</h2> {/*text-black*/}

      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-black">  {/*bg-white*/}
          <SideMenu activeMenu= {activeMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar