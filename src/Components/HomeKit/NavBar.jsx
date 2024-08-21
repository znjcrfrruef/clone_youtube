import React from "react";
import { FaBars, FaMicrophone } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmergencyRecording } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const NavBar = ({handleClckSideBar}) => {
  return (
    <div className=" flex  h-[80px]   m-3   ">
      <div className="flex gap-4 items-center   shrink-0  ">
        <button onClick={handleClckSideBar} >
          <FaBars size={"25px"} />
        </button>
        <button className="flex gap-2   ">
          <FaYoutube size={"25px"} />
          <p>YOUTUBE</p>
        </button>
      </div>
      <form className=" sm:mx-auto   ml-auto mr-[20px] flex   items-center gap-5 ">
        <div className=" relative flex items-center ">
        <input
          className=" sm:flex hidden rounded-2xl shadow-sm h-[40px]   border lg:w-[700px] md:w-[500px] w-[300px]   mx-auto   "
          placeholder="Rechercher"
        ></input>
       <button className=" sm:absolute right-0 "> <CiSearch size={"20px"} /></button>
       </div>

        <button className="  rounded-2xl ">
          <FaMicrophone size={"20px"}   />
        </button>
      </form>
      <div className=" shrink-0 flex items-center gap-5   ">
      <button><MdOutlineEmergencyRecording size={"20px"} /></button>
      <button>      <RiAccountCircleLine size={"20px"} /></button>
      <button><IoIosNotifications  size={"20px"} />      </button>

      </div>
    </div>
  );
};

export default NavBar;
