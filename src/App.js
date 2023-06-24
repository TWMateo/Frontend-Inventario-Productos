import React, { useState } from 'react'
import imgSrc from './assets/img/imgMenu'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RoutPages from './routes/Routes'

function App() {
  const OptionsNavBar = [
    { title: "Administracion de Productos", src: "Chart_fill", href: "/AdminProduct" },
    { title: "Inbox", src: "Chat", href: "/" },
    { title: "Accounts", src: "User", href: "/" },
    { title: "Schedule", src: "Calendar", href: "/" },
    { title: "Search", src: "Search", href: "/" },
    { title: "Analytics", src: "Chart", href: "/" },
    { title: "Archivos", src: "Folder", href: "/" },
  ]
  const [open, setOpen] = useState(true)
  return (
    <Router>
      <div className="flex">
        <div className={`${open ? "w-80" : "w-20"} duration-300 pl-2 h-screen gap-4 bg-dark-purple
     relative`}>
          <img src={imgSrc['control']} alt=''
            className={`${!open && "rotate-180"} absolute cursor-pointer rounded-full -right-3
       top-12 w-7 border-2 border-dark-purple`}
            onClick={() => setOpen(!open)}
          />
          <div className='flex gap-x-4 mt-4 items-center'>
            <img src={imgSrc['logo192']} alt='Logo-React'
              className='w-16 cursor-pointer duration-500'
            />
            <h1 className={`${!open && "hidden"}  text-white p-0 origin-left font-semibold text-x1 duration-200`}>
              Inventario Productos
            </h1>
          </div>
          <ul className={`${open ? "p-10 pt-5" : "p-0 pt-5"} duration-300`}>
            {OptionsNavBar.map((menu, index) => (
              <li key={index} className={`${menu.gap ? "mt-9" : "mt-2"} text-gray-300 text-sm flex items-center align-middle
        gap-x-4 cursor-pointer p-2 rounded-md mr-0 hover:bg-blue-500 duration-300`}>
                <Link to={menu.href} className={`origin-left duration-300 flex items-center align-middle gap-x-4`}>
                  <img src={imgSrc[menu.src]} alt='' />
                  <h1 className={`${!open && 'hidden'}`}>{menu.title}</h1>
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-x-4 items-center mt-10 cursor-pointer'>
            <img src={imgSrc['Setting']} className={`w-6 ml-2`} alt='img-setting' />
            <h1 className={`${!open && "scale-0 m-14"} text-white font-semibold origin-left textx1 duration-300`}>Settings</h1>
          </div>
        </div>
        <div className={`p-7 pr-36 text-2x1 font-semibold 
        h-screen relative flex justify-center w-full ml-28`}>
          <RoutPages />
        </div>
      </div>
    </Router>
  )
}

function renderApp() {
  return (
    <div>
      {App()}
    </div>
  )

}
export default renderApp
