import Image from "next/image"
import Logo from '../public/logo.png'
import Banner from '../public/banner.jpeg'

import {FaInstagram, FaFacebook} from 'react-icons/fa'


export const FootBarComponent = () => {
  return (
    <footer className="p-10 bg-[#ffffff] w-full">
        <div className=" flex flex-col md:flex-row space-y-4 md:space-x-3 md:justify-evenly h-full items-center">
            <div className="p-0.5 rounded-md shadow-md"><Image src={Banner} width={250} alt="logo" priority /></div>
           
        </div>
        <div className="border border-[#c4456981] my-5 w-[90%] mx-auto"/>
        <div className="flex justify-end space-x-2">            
            <div className="bg-[#333] p-1 rounded-md"><FaInstagram size={25} color="#c32aa3"/></div>
            <div className="bg-[#333] p-1 rounded-md"><FaFacebook size={25} color="#1877f2"/></div>
            
            
        </div>
    </footer>
  )
}
