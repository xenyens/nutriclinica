import Iframe from "react-iframe"

export default function HipertensionPage() {
  return (
    <div>
      <div className="flex flex-col px-10 pt-36">
        <h1 className="text-4xl font-bold uppercase">Hipertensión</h1>
        
        <div className="flex flex-col">      
          <Iframe
            title="Hipertensión"
            className="mt-4"
            url="https://www.youtube.com/embed/ZMUP8VQvAuE"
            height="400"
            width="100%"
          />      
        <div className="flex justify-end"><i>Video tomado de Sinapsis EMP, 2017</i></div>
        </div>
      </div>

      {/* Inicio del grid */}

    
     
      <div className="grid grid-rows-1 md:grid-cols-2 gap-3 mt-5 px-10 text-justify">

            <div className="md:col-span-2">
              <h1 className="subtitle text-xl font-bold">Definición</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">La hipertensión se define cuando las tomas en las medidas de presión son mayores a 140/90 mmHg</li>
                <li className="bg-green-100 rounded-md p-2">La hipertensión casi duplica el riesgo de infarto al corazón, accidente vascular cerebral e insuficiencia cardiaca, en particular para individuos mayores de 65 años de edad.</li>
                </ul>
            </div>
            
            <div className="">
              <h1 className="subtitle text-xl font-bold">Síntomas</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Dolor de cabeza frecuente</li>
                <li className="bg-green-100 rounded-md p-2">Visión alterada</li>
                <li className="bg-green-100 rounded-md p-2">Disnea (falta de aire)</li>
                <li className="bg-green-100 rounded-md p-2">Epistaxis (sangrado de la nariz)</li>
                <li className="bg-green-100 rounded-md p-2">Dolor torácico</li>
                <li className="bg-green-100 rounded-md p-2">Mareo</li>
                <li className="bg-green-100 rounded-md p-2">Falta de memoria</li>
                <li className="bg-green-100 rounded-md p-2">Ronquidos</li>
                <li className="bg-green-100 rounded-md p-2">Apnea durante el sueño</li>
                <li className="bg-green-100 rounded-md p-2">Molestia gastrointestinal</li>
              </ul>
            </div>

            <div className="">
              <h1 className="subtitle text-xl font-bold">Recomendaciones Nutricionales</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Consumo de frutas, verduras y lácteos bajos en grasa</li>
                <li className="bg-green-100 rounded-md p-2">Consumo de ácidos grasos omega-3, como la sardina, caballa, salmón varias veces a la semana, el atún debe usarse con menor frecuencia por su contenido de mercurio puede elevar la presión.</li>
                <li className="bg-green-100 rounded-md p-2">Quitar el salero de la mesa y probar la comida antes de ponerle sal.</li>
                <li className="bg-green-100 rounded-md p-2">Algunas grasas saturadas pueden sustituirse por aceites de oliva, soya y canola durante la preparación. de los alimentos. Los pistaches, semillas de girasol, semillas de sésamo y germen de trigo son fuentes adecuadas de fitoesteroles; consumir con frecuencia. </li>
                <li className="bg-green-100 rounded-md p-2">Aumentar las fuentes de alimentos que contienen ácido fólico, vitamina B12 y B6 para mejorar la salud cardiovascular en general. (salmón, sardina, semillas de girasol, frutos secos, queso fresco, carne, huevo.)</li>
                </ul>
            </div>
            
          </div>
      </div>
  );
}
