import React, { useState } from 'react'
import imgSrc from './assets/img/imgMenu'
import imgMenu from './assets/img/Calendar.png'

function App() {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User"},
    { title: "Schedule", src: "Calendar"},
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files", src: "Folder"},
  ]
  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple
       relative`}>
        <img src={imgSrc['control']} alt=''
          className={`${!open && "rotate-180"} absolute cursor-pointer rounded-full -right-3
         top-9 w-7 border-2 border-dark-purple`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex gap-x-4 items-center'>
          <img src={imgSrc['logo192']} alt='Logo-React'
            className='w-16 cursor-pointer duration-500'
          />
          <h1 className={`${!open && "hidden"}  text-white p-0 origin-left font-semibold text-x1 duration-200`}>
            Inventario Productos
          </h1>
        </div>
        <ul className={`${open ? "p-10 pt-5" : "p-0 pt-5"} duration-300`}>
          {Menus.map((menu, index) => (
          <li key={index} className={`${menu.gap ? "mt-9" : "mt-2"} text-gray-300 text-sm flex items-center align-middle
          gap-x-4 cursor-pointer p-2`}>
            <img src={imgSrc[menu.src]} alt='' />
            <span className={`${!open && 'hidden'} origin-left duration-300`}>{menu.title}</span> 
          </li>
          ))}
        </ul>
        <div className='flex gap-x-4 items-center mt-14 cursor-pointer'>
          <img src={imgSrc['Setting']} className={`w-6 ml-2`} alt='img-setting'/>
          <h1 className={`${!open && "scale-0 m-14"} text-white font-semibold origin-left textx1 duration-300`}>Setting</h1>
        </div>
      </div>
      <div className="p-7 text-2x1 font-semibold 
      flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
