import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import hero from "../img/hero4.png"
import img1 from "../img/github.png"
import img2 from "../img/resume.png"
import Navber from './Navber';
const Header = () => {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Student.","Web Designer.","React Developer.","Full-Stack Developer.","Front-end Developer."],
        startDelay: 300,
        typeSpeed: 200,
        backSpeed: 200,
        backDelay: 200,
        loop:true
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
    return (
        <div className="w-full  bg-slate-300 overflow-hidden">
            <div>
                <Navber></Navber>
            </div>
            <div className=" flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 pt-10">
            <div  className="flex flex-col gap-4 p-10 w-full">
                    <p className="text-xl text-slate-600 font-semibold lett">Hello, my name is</p>
                    <h1 className="text-2xl text-rose-500 font-bold">Dipta Saha</h1>
                    <h5 className="text-lg text-slate-600 font-semibold">And I'm a <span ref={el} className=" text-orange-600 font-extrabold"></span> </h5>
                    <p className="font-medium text-slate-700">Seeking a challenging career in the Software designing and software development field in the local 
                        and global market applying my academic coursework and programming skills.</p>
                    <div className="flex items-center gap-4">
                    <a href="https://github.com/didipta" target="_blank"><button className='btn btn-sm bg-black text-white flex items-center gap-2'><img src={img1} alt="" className='w-5'></img> Git Account</button></a>
                    <a href="https://drive.google.com/file/d/1t11C26OXEQuSzwZnzYDLvljZTjguDUup/view?usp=sharing" target="_blank"><button className='btn btn-sm bg-orange-500 border-none text-white flex items-center gap-2'><img src={img2} alt="" className='w-3'></img>Resume</button></a>
                    </div>
                    
                </div>
                <div className="w-full">
                  <img src={hero} alt="" className=""></img>
                </div>
            </div>
        </div>
    );
};

export default Header;