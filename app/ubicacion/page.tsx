import Iframe from "react-iframe"
import {FaWhatsapp} from 'react-icons/fa'
import Link from "next/link"

const UbicacionPage = () => {
  return (
    <div className="flex items-center space-y-6 pt-36 flex-col">
        <div>
            <h1 className="text-xl font-bold uppercase">Ubicación</h1>
        </div>

        <div className="text-center">
            <p>Blvd Ramirez Méndez, esquina con calle Pípila</p>
            <p>Estoy ubicada arriba de laboratorio Preciado</p>
        </div>
        <div className="flex items-center space-x-2">
            <FaWhatsapp size={35} color="green"/>
            <span className="text-2xl font-bold"><Link href={'https://wa.me/526461271874'}>(646)-127-18-74</Link></span>
        </div>
        
        <div>
            <p>Nutrióloga Clínica Ana Karen Juárez</p>
        </div>

        <div>
            <Iframe 
                url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3388.7415674209137!2d-116.59785368484098!3d31.859246981258856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDUxJzMzLjMiTiAxMTbCsDM1JzQ0LjQiVw!5e0!3m2!1ses-419!2smx!4v1681269290351!5m2!1ses-419!2smx"
                width="400"
                height="400"
                allow="fullscreen"
            />
        </div>

    </div>
  )
}

export default UbicacionPage


