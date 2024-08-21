import React, { useEffect, useRef, useState } from 'react';
import { CiHome } from 'react-icons/ci';
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory, FaYoutube, FaBars } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdOutlinePlaylistPlay } from 'react-icons/md';
import { GoVideo } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { RiFileVideoFill } from "react-icons/ri";

const SideBarButton = ({ text, icons,col }) => { 
  const [isclicked,setIsclicked]=useState(false);
  const handlClickBtn=(event)=>{ 
setIsclicked(true)
  }
  return (
    <button onClick={handlClickBtn} className={`${ col ? "flex flex-col gap-2 items-center  " :"flex gap-2" } ${isclicked ? " bg-slate-500" : ""}`}>
      <div>{icons}</div> 
      <p>{text}</p>
    </button>
  );
};

const SidBar = ({ showSideBar, handleClckSideBar }) => {
  const navBarRef = useRef(null);
  const closeNavBar = (event) => {
    if (navBarRef.current && !navBarRef.current.contains(event.target)) {
      handleClckSideBar(); // Appeler la fonction correctement 
    }
  };

  useEffect(() => { 
    document.addEventListener("click", closeNavBar);
    return () => {
      document.removeEventListener("click", closeNavBar);
    };
  }, []);


  return (
    <div className='w-[200px]  '>
       <div>
       <div className=' z-10 w-[65px]  sm:flex flex-col gap-4 m-1 hidden xl:hidden text-[10px] -mt-[130px] lg:-mt-[84px]'>
            <SideBarButton text="Accueil" icons={<CiHome size={"20px"}  />} col />
            <SideBarButton text="Shorts" icons={<SiYoutubeshorts size={"20px"}  /> } col/>
            <SideBarButton text="Abonnements" icons={<GoVideo size={"20px"} />} col />
            <SideBarButton text="Vous" icons={<RiFileVideoFill size={"20px"} />} col />

          </div> 
       </div>

      {showSideBar && (
        <div ref={navBarRef} className=' z-10 absolute top-0 flex flex-col gap-7 bg-black text-white w-[200px] h-screen '>
          <div className="flex gap-4 items-center shrink-0 m-3">
            <button onClick={handleClckSideBar}>
              <FaBars size={"25px"} />
            </button>
            <button className="flex gap-2">
              <FaYoutube size={"25px"} />
              <p>YOUTUBE</p>
            </button>
          </div>
          <div className='flex flex-col gap-4 ml-3'>
            <SideBarButton text="Accueil" icons={<CiHome size={"20px"} />} />
            <SideBarButton text="Shorts" icons={<SiYoutubeshorts size={"20px"} />} />
            <SideBarButton text="Abonnements" icons={<CiHome size={"20px"} />} />
            <hr className="mr-3 border-t border-gray-300" />
          </div>
          <div className='flex flex-col gap-4 ml-3'>
            <button className='flex gap-2 items-center'>
              <p>Vous</p>
              <IoIosArrowForward />
            </button>
            <SideBarButton text="Votre chaine" icons={<RiAccountBoxLine size={"20px"} />} />
            <SideBarButton text="Historique" icons={<FaHistory size={"20px"} />} />
            <SideBarButton text="Playlists" icons={<MdOutlinePlaylistPlay size={"20px"} />} />
            <SideBarButton text="Vos videos" icons={<GoVideo size={"20px"} />} />
            <SideBarButton text="A regarder plus tard" icons={<IoMdTime size={"20px"} />} />
            <SideBarButton text="Video jaime" icons={<AiOutlineLike size={"20px"} />} />
            <hr className="mr-3 border-t border-gray-300" />
          </div>
          <div className='flex flex-col gap-4 ml-3'>
            <p>Abonnements</p>
            <hr className="mr-3 border-t border-gray-300" />
          </div>
          <div className='flex flex-col gap-4 ml-3'>
            <p>Explorer</p>
            <hr className="mr-3 border-t border-gray-300" />
          </div>
        </div>
      )}



      <div className=' z-10 xl:flex flex-col hidden w-[200px]  -mt-[130px] lg:-mt-[84px]' >
      <div className='flex flex-col gap-4 ml-3'>
            <SideBarButton text="Accueil" icons={<CiHome size={"20px"} />} />
            <SideBarButton text="Shorts" icons={<SiYoutubeshorts size={"20px"} />} />
            <SideBarButton text="Abonnements" icons={<CiHome size={"20px"} />} />
            <hr className="mr-3 border-t border-gray-300 w-[160px] " />
          </div>
          <div className='flex flex-col gap-4 ml-3'>
            <button className='flex gap-2 items-center'>
              <p>Vous</p>
              <IoIosArrowForward />
            </button>
            <SideBarButton text="Votre chaine" icons={<RiAccountBoxLine size={"20px"} />} />
            <SideBarButton text="Historique" icons={<FaHistory size={"20px"} />} />
            <SideBarButton text="Playlists" icons={<MdOutlinePlaylistPlay size={"20px"} />} />
            <SideBarButton text="Vos videos" icons={<GoVideo size={"20px"} />} />
            <SideBarButton text="A regarder plus tard" icons={<IoMdTime size={"20px"} />} />
            <SideBarButton text="Video jaime" icons={<AiOutlineLike size={"20px"} />} />
            <hr className="mr-3 border-t border-gray-300 w-[160px]" />
          </div>
          <div className='flex flex-col gap-4 ml-3'>
            <p>Abonnements</p>
            <hr className="mr-3 border-t border-gray-300 w-[160px]" />
          </div>
          <div className='flex flex-col gap-4 ml-3'>
            <p>Explorer</p>
            <hr className="mr-3 border-t border-gray-300 w-[160px]" />
          </div>
      </div>

    </div>
  );
};

export default SidBar;
