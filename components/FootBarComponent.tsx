import Image from "next/image"
import Logo from '../public/logo.png'
import Banner from '../public/banner.jpeg'

import {FaInstagram, FaFacebook} from 'react-icons/fa'
import Link from "next/link"


export const FootBarComponent = () => {
  return (
    <footer className=" bg-[#ffffff] w-full mt-10">
        <div className="
                flex                
                flex-col
                md:flex-row               
                md:space-x-3
                md:justify-evenly
                h-full
                items-center
                uppercase
                font-semibold
                "
            >
           <ul className="text-center">
              <Link href={'/ubicacion'}><li className="text-sm p-2 rounded-md hover:cursor-pointer hover:text-white hover:bg-fuchsia-900">Ubicación</li></Link>
              
           </ul>

           <ul className="text-center">
              <Link href={'/ubicacion'}><li className="text-sm p-2 rounded-md hover:cursor-pointer hover:text-white hover:bg-fuchsia-900">Certificaciones</li></Link>
              
           </ul>
           
        </div>
        <div className="border border-[#c4456981] my-5 w-[90%] mx-auto"/>
        <div className="mt-3 bg-black flex justify-center  "><Image src={Banner}  alt="logo" priority /></div>
        
        <div className="flex justify-evenly my-5">            
            <div><p>Copyright &copy; 2023. All Rights Reserved </p></div>            
            
            <div className="flex space-x-3">
              <div ><FaInstagram size={25} color="#c32aa3"/></div>
              <div ><FaFacebook size={25} color="#1877f2"/></div>              
            </div>
            
        </div>
    </footer>
  )
}
