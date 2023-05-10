import Image from 'next/image';
import { CardBeverage } from '@/components/components/CardBeverage';

import bebida01 from '../../public/jugoverde.jpg'
import bebida02 from '../../public/jugopepino.jpg'
import bebida03 from '../../public/smoothiefrutosrojos.jpg'
import bebida04 from '../../public/batidoplatanoavena.jpg'
import bebida05 from '../../public/infusiongengibrelimon.jpg'
import bebida06 from '../../public/teverdeconmenta.jpg'


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
        
        <CardBeverage
            imagen={bebida03}
            title='Smoothie de frutos rojos'
            ingredients={['1 taza de frutos rojos (fresas, frambuesas, moras, arándanos, etc.)','1 plátano maduro','1 taza de leche de almendras (o cualquier otra leche vegetal)','1 cucharada de miel o sirope vegetal (opcional)','Hielo al gusto']}
            instructions={['Coloca todos los ingredientes en una licuadora.','Licua hasta obtener una mezcla suave y cremosa.','Agrega hielo si lo deseas y vuelve a licuar por unos segundos.','Sirve en un vaso y disfruta.']}
        />

        <CardBeverage
            imagen={bebida04}
            title='Batido de plátano y avena'
            ingredients={['1 plátano maduro','1 taza de leche de almendras (o cualquier leche vegetal)','1/4 de taza de avena en hojuelas','1 cucharada de miel o sirope de arce (opcional)','Canela en polvo al gusto','Hielo al gusto']}
            instructions={['En una licuadora, agrega el plátano, la leche de almendras, la avena, la miel y la canela.','Licua hasta obtener una mezcla suave y cremosa.','Agrega hielo si así lo deseas y vuelve a licuar por unos segundos.','Sirve en un vaso y disfruta el batido.']}
        />
        
        <CardBeverage
            imagen={bebida05}
            title='Infusión de jengibre y limón'
            ingredients={['1 trozo de jengibre fresco, pelado y rallado','Jugo de 1 limón','2 cucharaditas de miel','1 taza de agua caliente']}
            instructions={['En una tetera o recipiente, coloca el jengibre rallado y el jugo de limón.','Agrega el agua caliente y deja reposar durante 5 a 10 minutos.','Endulza con miel.','Cuela la infusión y sirve caliente.','Disfruta de esta bebida reconfortante y beneficiosa para la digestión.']}
        />
        
        <CardBeverage
            imagen={bebida06}
            title='Té verde con menta y limón'
            ingredients={['1 bolsitas de té verde','1 o 1/2 ramita de menta fresca','Jugo de medio limón','2 cucharaditas de miel','1 taza de agua caliente']}
            instructions={['Coloca la bolsita de té verde y la ramita de menta en una tetera o recipiente.','Deja infusionar durante 3 a 5 minutos.','Retira la bolsita de té y la menta.','Agrega el jugo de limón y endulza con la miel','Revuelve bien y sirve caliente','Disfruta de este té refrescante y lleno de antioxidantes.']}
        />

      </div>
    </div>
        
    );
}