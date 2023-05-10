import Image from 'next/image';
import { CardBeverage } from '@/components/components/CardBeverage';

import bebida01 from '../../public/jugoverde.jpg'
import bebida02 from '../../public/jugopepino.jpg'


const ingredientes = [

]

export default function Bebidas() {
    return (        
    <div>
      <div className="flex flex-col items-center pt-36 px-5 bg-gray-100">

        
        <CardBeverage
            imagen={bebida01}
            title='Jugo verde Dexto'
            ingredients={['1 taza de espinacas frescas','1 taza de piña en trozos','1 plátano maduro','1/2 taza de agua de coco','Jugo de 1 limón','Hielo al gusto']}
            instructions={['Coloca todos los ingredientes en una licuadora.','Licua hasta obtener una mezcla suave y homogénea.','Agrega hielo si lo deseas y vuelve a licuar por unos segundos','Sirve y disfruta este batido verde detox cargado de nutrientes']}
        />

        <CardBeverage
            imagen={bebida02}
            title='Agua de pepino con limón'
            ingredients={['1 pepino mediano, pelado y cortado en rodajas','Juego de 2 limones','1 litro de agua','Hojas de menta (opcional)','Hielo al gusto']}
            instructions={['Coloca el pepino, el jugo de limón y las hojas de menta en una jarra.','Machaca ligeramente los ingredientes con un mortero para liberar los sabores.','Agrega el agua y revuelve bien.','Añade hielo al gusto y deja reposar en el refrigerador durante al menos 1 hora para que los sabores se mezclen.','Sirve frío y disfruta de esta refrescante agua de pepino y limón']}
        />
        
      </div>
    </div>
        
    );
}