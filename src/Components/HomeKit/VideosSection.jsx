import React, { useRef, useState } from "react";
import v1 from "../../Asset/v1.mp4";
import v2 from "../../Asset/v2.mp4";
import v3 from "../../Asset/v3.mp4";
import v4 from "../../Asset/v4.mp4";
import v5 from "../../Asset/v5.mp4";
import v6 from "../../Asset/v6.mp4";
import v7 from "../../Asset/v7.mp4";
import v8 from "../../Asset/v8.mp4";
import v9 from "../../Asset/v9.mp4";
import v10 from "../../Asset/v10.mp4";
import v11 from "../../Asset/v11.mp4";
import logo from "../../Asset/logo.jpg";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMuteOutline } from "react-icons/io5";


const VideosSection = () => {
  return (
    <div className="mt-3 mx-3 sm:ml-20 lg:-mt-[65px] xl:ml-[230px] xl:-mt-80   grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {VideoList.map((item, index) => (
        <VideoItem key={index} {...item} />
      ))}
    </div>
  );
};

export default VideosSection;

const VideoItem = ({
  video,
  title,
  logoChaine,
  nomChaine,
  nbrVue,
  tempsDiffuse,
}) => {

  const refVideo=useRef(null);
  const [isMuted,setIsMuted]=useState(true);
  const [isVideoEnter,setIsVideoEnter]=useState(false);
  const [dureéVideo,setDureéVideo] = useState(null);


  const handelMouseEnterVideo=()=>{
    refVideo.current.play();
    setIsVideoEnter(true) ;
    refVideo.current.style.border='dashed 2px black' ;
  }

  const handelMouseLeaveVideo=()=>{
     refVideo.current.pause();
    setIsVideoEnter(false) ;
    refVideo.current.style.border=' none' ;


  } 
  const toggleIsMuted=()=>{
setIsMuted(!isMuted);
refVideo.current.muted=!isMuted;
  }

 const handelMetaData=()=>{
  const dureé=refVideo.current.duration;
  const minute=Math.floor(dureé/60);
  const seconde=Math.floor(dureé % 60).toString().padStart(2,'0');
  setDureéVideo(`${minute}:${seconde} `)
 }

 const handelTimeUpdate=()=>{
const currentTime=refVideo.current.currentTime;
const updateTime=refVideo.current.duration - currentTime;
const minute=Math.floor(updateTime/60); 
const seconde=Math.floor(updateTime % 60).toString().padStart(2,'0');
setDureéVideo(`${minute}:${seconde} `)

 }

  return (
    <div className="flex flex-col gap-2    ">
      <div onMouseEnter={handelMouseEnterVideo} onMouseLeave={handelMouseLeaveVideo} className="relative">
       <div className="  rounded-sm"> 
        <video  onTimeUpdate={handelTimeUpdate} onLoadedMetadata={handelMetaData}  muted={isMuted}  ref={refVideo} className="w-full" src={video} type="video/mp4"    loop  />
         </div>
       {isVideoEnter ? 
        <div>
          <p className=" text-[12px] absolute right-[3px] bottom-0 bg-black text-white font-semibold">{dureéVideo}</p>
         <button onClick={toggleIsMuted} className=" absolute top-2 right-2" > {isMuted ? <IoVolumeMuteOutline size={20} /> : <GoUnmute size={20} />  }  </button> 
        </div>
        : [] }
      </div>
      <div className="flex gap-3">
        <img  className=" size-8 rounded-full" src={logoChaine}  />
        <div className="flex flex-col">
          <p className=" font-semibold">{title}</p>
          <p className=" font-thin text-sm ">{nomChaine}</p>
          <div className="flex  font-thin text-sm">
            <p>{nbrVue} vues . </p>
            <p> Diffusé il y a {tempsDiffuse} Semaine </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VideoList = [
  {
    video: v1,
    title: "video1",
    logoChaine: logo,
    nomChaine: "said",
    nbrVue: 15,
    tempsDiffuse: 10,
  },
  {
    video: v2,
    title: "video2",
    logoChaine: logo,
    nomChaine: "said",
    nbrVue: 15,
    tempsDiffuse: 10,
  },
  {
    video: v3,
    title: "video3",
    logoChaine: logo,
    nomChaine: "said",
    nbrVue: 15,
    tempsDiffuse: 10,
  },
  {
    video: v4,
    title: "video4",
    logoChaine: logo,
    nomChaine: "said",
    nbrVue: 15,
    tempsDiffuse: 10,
  },
  {
    video: v5,
    title: "video5",
    logoChaine: logo,
    nomChaine: "said",
    nbrVue: 15,
    tempsDiffuse: 10,
  },
  {
    video: v6,
    title: "video6",
    logoChaine: logo,
    nomChaine: "said",
    nbrVue: 15,
    tempsDiffuse: 10,
  },
  {
    video: v7,
    title: "video7",
    logoChaine: logo,
    nomChaine: "said",
    nbrVue: 15,
    tempsDiffuse: 10,
  },
  {
    video: v8,
    title: "video8",
    logoChaine: logo,
    nomChaine: "said",
    nbrVue: 15,
    tempsDiffuse: 10,
  }
];
