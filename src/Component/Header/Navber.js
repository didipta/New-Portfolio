import React from 'react';
import img from "../img/logo.png"
const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 font-semibold">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li ><a href="#">Home</a></li>
                <li ><a href="#project">Project</a></li>
                <li ><a href="#contact">Contact</a></li>
                <li ><a href="#about">About</a></li>
                <li ><a href="#skill">Skill</a></li>
      </ul>
    </div>
            <div><a href="#" className="flex items-center gap-2 pl-6">
            <img src={img} alt="" className="w-7 rounded-full"/>
            <h3 className="text-xl font-extrabold text-slate-700"><span className="text-pink-600">Port</span>folio</h3>
            </a></div>
            </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
                <li ><a href="#">Home</a></li>
                <li ><a href="#project">Project</a></li>
                <li ><a href="#contact">Contact</a></li>
                <li ><a href="#about">About</a></li>
                <li ><a href="#skill">Skill</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navber;