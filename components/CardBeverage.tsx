import Image, { StaticImageData } from "next/image";
import { Nanum_Gothic } from "next/font/google";

interface Props {
    imagen: StaticImageData,
    title: string,
    ingredients: string[],
    instructions: string[]
}

const lato = Nanum_Gothic({ subsets: ["latin"], weight: ['400','700','800'] });


export const CardBeverage = ({imagen,title,ingredients,instructions}:Props) => {
    return (
        <div className={`${lato.className} bg-white px-[20%] pt-10`}>
            <div>
                <Image src={imagen} alt='bebida-verde' className=''/>
            </div> 

            <div className='mt-5 text-xl'>
                <h2 className='text-5xl font-bold'>{title}</h2>
                <p className="my-3 font-bold">Ingredientes</p>
                <ul>
                   {ingredients.map((item,key) => {
                    return <li key={key} className="">{item}</li>
                   })}
                </ul>
            </div>

            <div className='mt-5'>
                <h2 className='text-xl font-[800] my-3'>Preparación</h2>
                <ul>
                {instructions.map((item,key) => {
                    return <li key={key} className="text-lg">{item}</li>
                   })}
                </ul>
            </div>
            
        </div>
    );
}