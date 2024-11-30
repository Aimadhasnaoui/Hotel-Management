import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
export default function AppLayer() {
    const [Menu,setMenu] = useState(false)
    useEffect(() => {
        const data = localStorage.getItem("menu");
        console.log(data);
        if (data === "true") {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }, []);
  return (
    <main className='flex w-full h-screen'>
        <div className={`${Menu ?"w-[7%]":"w-[20%]"} fixed h-full`}>
            <Header Menu={Menu} />
        </div>
        <div 
        className={`${Menu ?"w-[95%] ml-[7%]":"ml-[20%] w-[80%]"} fixed h-full`}
        >
            <div className={`${Menu ?"w-[95%]":"w-[80%]"} fixed  bg-[#111827]`}>
                <NavBar setMenu={setMenu} Menu={Menu} />
            </div>
            <div className='pt-[64px] min-h-screen overflow-y-auto bg-[#111827] px-6'>
                   <Outlet></Outlet>
            </div>
        </div>
    </main>
  )
}