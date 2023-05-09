'use client'

import Image from 'next/image'
import React from 'react'

import postre from '../../public/postre.jpeg'
import desayuno from '../../public/desayuno.jpeg'
import comida from '../../public/comida.jpeg'
import cena from '../../public/cena.jpeg'
import Link from 'next/link'


const RecetasPage = () => {
  return (
    <main className='pt-36'>
        <header className=''>
            <h1 className='font-bold text-center text-xl uppercase'>Recetas saludables</h1>
        </header>
        <div className='mx-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white gap-3 mt-6'>

            {/* <div className='bg-[#fc979f] w-full max-h-[350px] rounded-md flex flex-col items-center border-[4px] border-[#c9c6c6] shadow-md'>
                <Image src={desayuno} alt='breakfast' className='w-[95%] h-[85%] p-3'/>
                <button type='button' className='bg-[#e5e4def9] w-[90%] rounded-md uppercase font-bold hover:bg-[#b0a9a9]'>Desayunos</button>
            </div>
            <div className='bg-[#fc97f4] w-full max-h-[350px] rounded-md flex flex-col items-center border-[4px] border-[#c9c6c6] shadow-md'>
                <Image src={comida} alt='breakfast' className='w-[95%] h-[85%] p-3'/>
                <button type='button' className='bg-[#e5e4def9] w-[90%] rounded-md uppercase font-bold hover:bg-[#b0a9a9]'>Comidas</button>
            </div>
            <div className='bg-[#cd97fc] w-full max-h-[350px] rounded-md flex flex-col items-center border-[4px] border-[#c9c6c6] shadow-md'>
                <Image src={cena} alt='breakfast' className='w-[95%] h-[85%] p-3'/>
                <button type='button' className='bg-[#e5e4def9] w-[90%] rounded-md uppercase font-bold hover:bg-[#b0a9a9]'>Cenas</button>
            </div>
            <div className='bg-[#97fcc3] w-full max-h-[350px] rounded-md flex flex-col items-center border-[4px] border-[#c9c6c6] shadow-md'>
                <Image src={postre} alt='breakfast' className='w-[95%] h-[85%] p-3'/>
                <button type='button' className='bg-[#e5e4def9] w-[90%] rounded-md uppercase font-bold hover:bg-[#b0a9a9]'>Postres</button>
            </div>
            <div className='bg-[#f7fc97] w-full max-h-[350px] rounded-md flex flex-col items-center border-[4px] border-[#c9c6c6] shadow-md'>
                <Image src={desayuno} alt='breakfast' className='w-[95%] h-[85%] p-3'/>
                <button type='button' className='bg-[#e5e4def9] w-[90%] rounded-md uppercase font-bold hover:bg-[#b0a9a9]'>Aderezos</button>
            </div> */}
            
            <div className='bg-[#f7fc97] w-full max-h-[350px] rounded-md flex flex-col items-center border-[4px] border-[#c9c6c6] shadow-md hover:bg-[#ebf52a]'>
                <Link href={'/bebidas'}>
                    <Image src={desayuno} alt='breakfast' className='w-[100%] h-[85%] p-3'/>
                    <p className='uppercase font-bold text-center bg-[#e5e4def9] px-3 rounded-md'>Bebidas</p>                
                </Link>
            </div>

            
            
        </div>
    </main>
  )
}

export default RecetasPage