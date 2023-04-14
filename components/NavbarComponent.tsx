"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../public/logo.png";
import Banner from "../public/banner.jpeg";
import Link from "next/link";

const rutasMobile = [
  {
    ruta: '/',
    label: 'Inicio'
  },
  {
    ruta: '/equivalentes',
    label: 'Equivalentes'
  },
  {
    ruta: '/enfermedades',
    label: 'Enfermedades'
  },
  {
    ruta: '/recetas',
    label: 'Recetas'
  },
  {
    ruta: '/ubicacion',
    label: 'Ubicación'
  },
]

const rutas = [
  {
    ruta: '/',
    label: 'Inicio'
  },
  {
    ruta: '/equivalentes',
    label: 'Equivalentes'
  },
  {
    ruta: '/enfermedades',
    label: 'Enfermedades'
  },
  {
    ruta: '/recetas',
    label: 'Recetas'
  },
]

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
    
  }

  return (
    <nav className="fixed w-full h-28 shadow-md bg-[#e66767] z-50">
      <div className="flex justify-between items-center h-full w-full px-10 2xl:px-16 text-white ">
        <Link href={'/'}><Image src={Logo} width={75} height={75} alt="logo" priority /></Link>
        {/* Main menu */}
        <div className="sm:flex hidden space-x-3">
          {rutas.map(ruta =>(
            <Link href={ruta.ruta} key={ruta.label}>
               <h1 className=" uppercase hover:border-b font-bold hover:text-black">{ruta.label}</h1>
            </Link>
          ))}
        </div>


        {/* Menu control */}
        <div onClick={handleMenu} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} color="white" />
        </div>
        <div
          className={
            menuOpen
              ? "fixed z-50 right-0 top-0 w-[70%] md:hidden h-screen bg-[#333] text-white p-10 ease-out duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full items-center">
            <div onClick={handleMenu} className="cursor-pointer">
              <AiOutlineClose size={25}/>
            </div>
          </div>

          {/* Display menu mobile */}
          <div className="flex-col space-y-10 mt-3 h-screen">
          {rutasMobile.map(ruta =>(
            <Link href={ruta.ruta} key={ruta.label}>
               <h1
                onClick={handleMenu} 
                className="mt-5 uppercase hover:border-b text-xl hover:text-green-500">{ruta.label}</h1>
            </Link>
          ))}
              <Image src={Banner} width={200} alt="logo" priority className="justify-center" />
            </div>
          
          
          
        </div>
      </div>
    </nav>
  );
}
