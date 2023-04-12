import Image from 'next/image'
import { Waterfall } from 'next/font/google'
import Profile from '../public/profile.jpeg'

const waterfall = Waterfall({ weight: "400", subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className="
        flex                
        flex-col
        items-center
        p-36
        px-16
        "
    >
      <h1 className="text-sm md:text-xl">NUTRICIÓN CLÍNICA</h1>
      <h1
        className={`
          ${waterfall.className}
          text-4xl
          md:text-7xl         
        `}
      >
        Ana Karen Juárez
      </h1>

      <div className='flex md:flex-row flex-col mt-16 sm:items-center md:items-start'>
        <div className='md:w-1/3'><Image src={Profile} alt='profile' priority/></div>
        <div className='space-y-3 mt-5 md:mt-0 md:w-2/3 text-justify md:ml-4'>
          <p>¡Bienvenidos a mi página web de nutrición! Soy Ana Karen, nutrióloga certificada, y estoy aquí para ayudarte a lograr tus objetivos de salud y bienestar a través de una alimentación adecuada y personalizada.</p>
          <p>En mi página web encontrarás información sobre nutrición, dietas, hábitos saludables y mucho más. También ofrezco servicios de asesoramiento nutricional personalizado para ayudarte a alcanzar tus objetivos y mejorar tu calidad de vida.</p>
          <p>Creo firmemente en que la nutrición es clave para una vida saludable y feliz, y estoy comprometida en brindarte la información y el apoyo necesarios para que puedas tomar decisiones informadas y alcanzar tus metas.</p>
          <p>Gracias por visitar mi página web, espero poder ayudarte en tu camino hacia una vida más saludable y equilibrada. ¡No dudes en contactarme si tienes alguna pregunta o si deseas programar una consulta!</p>
        </div>
      </div>
     
    </main>
    
  )
}
