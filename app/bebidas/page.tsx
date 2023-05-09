import Image from 'next/image';
import bebida01 from '../../public/bebida01.jpeg'


export default function Bebidas() {
    return (        
    <div>
      <div className="flex flex-col items-center pt-36">

        <div className='flex flex-row place-items-start'>
            <div>
                <Image src={bebida01} alt='bebida-verde' className='w-[300px] h-[450px]'/>
            </div> 

            <div className='ml-6'>
                <h2 className='text-2xl font-bold'>Batido verde detox</h2>
                <p>Ingredientes:</p>
                <ul>
                    <li>1 taza de espinacas frescas</li>
                    <li>1 taza de piña en trozos</li>
                    <li>1 plátano maduro</li>
                    <li>1/2 taza de agua de coco</li>
                    <li>Jugo de 1 limón</li>
                    <li>Hielo al gusto</li>
                </ul>
            </div>
            <div className='ml-10'>
                <h2 className='text-lg font-bold'>Preparación</h2>
                <ul>
                    <li>Coloca todos los ingredientes en una licuadora</li>
                    <li>Licua hasta obtener una mezcla homogenea</li>
                    <li>Agrega hielo si lo deseas y vuelve a licuar por unos segundos</li>
                    <li>Sirve y disfruta este batido verde detox cargado de nutrientes</li>
                </ul>
            </div>
        </div>

        
      </div>
    </div>
        
    );
}