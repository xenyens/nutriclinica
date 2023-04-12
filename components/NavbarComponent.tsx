"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../public/logo.png";
import Link from "next/link";

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
    console.log("click....");
  }

  return (
    <nav className=" w-full h-28 shadow-md bg-[#e66767] ">
      <div className="flex justify-between items-center h-full w-full px-10 2xl:px-16 text-white ">
        <Image src={Logo} width={75} height={75} alt="logo" priority />
        {/* Main menu */}
        <div className="sm:flex hidden space-x-3">
          <Link href={"/"}>
            <h1 className=" uppercase hover:border-b text-xl hover:text-black">INICIO</h1>
          </Link>
          <Link href={"/equivalentes"}>
            <h1 className="uppercase hover:border-b text-xl hover:text-black">EQUIVALENTES</h1>
          </Link>
          <Link href={"/enfermedades"}>
            <h1 className="uppercase hover:border-b text-xl hover:text-black">ENFERMEDADES</h1>
          </Link>
        </div>


        {/* Menu control */}
        <div onClick={handleMenu} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} color="white" />
        </div>
        <div
          className={
            menuOpen
              ? "fixed z-10 left-0 top-0 w-[70%] md:hidden h-screen bg-[#333] text-white p-10 ease-out duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full justify-end items-center">
            <div onClick={handleMenu} className="cursor-pointer">
              <AiOutlineClose size={25}/>
            </div>
          </div>

          {/* Display menu mobile */}
          <div className="flex-col space-y-10 mt-3 h-screen">
              <div>
                <Link href={"/"}>
                  <h1 className="uppercase hover:border-b text-xl" onClick={handleMenu}>INICIO</h1>
                </Link>
              </div>
              <div>
                <Link href={"/equivalentes"}>
                  <h1 className="uppercase hover:border-b text-xl"onClick={handleMenu}>EQUIVALENTES</h1>
                </Link>
              </div>
              <div>
                <Link href={"/enfermedades"}>
                  <h1 className="uppercase hover:border-b text-xl"onClick={handleMenu}>ENFERMEDADES</h1>
                </Link>
              </div>

              <Image src={Logo} width={100} height={100} alt="logo" priority className="justify-center" />
            </div>
          
          
          
        </div>
      </div>
    </nav>
  );
}
