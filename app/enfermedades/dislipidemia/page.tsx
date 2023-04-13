import Iframe from "react-iframe"

export default function DislipidemiaPage() {
  return (
    <div>
      <div className="flex flex-col px-10 pt-36">
        <h1 className="text-4xl font-bold uppercase">Dislipidemia</h1>
        
        <div className="flex flex-col">      
          <Iframe
            title="Dislipidemia - Youtube Player"
            className="mt-4"
            url="https://www.youtube.com/embed/w5L-fW4XsKw"
            height="400"
            width="100%"
          />      
        <div className="flex justify-end"><i>Video tomado de Medicable, 2017</i></div>
        </div>
      </div>

      {/* Inicio del grid */}

    
     
      <div className="grid grid-rows-1 md:grid-cols-2 gap-3 mt-5 px-10 text-justify">

            <div className="md:col-span-2">
              <h1 className="subtitle text-xl font-bold">Definición</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Se refiere a una alteración en los niveles de grasa en la sangre, lo que puede aumentar el riesgo de enfermedades cardiovasculares</li>
                
                </ul>
            </div>
            
            <div className="">
              <h1 className="subtitle text-xl font-bold">Síntomas</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Es muy difícil tenerlos, se recomienda hacer laboratorios para su control.</li>
                
              </ul>
            </div>

            <div className="">
              <h1 className="subtitle text-xl font-bold">Recomendaciones Nutricionales</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Controlar el consumo de grasas saturadas y trans en la dieta.</li>
                <li className="bg-green-100 rounded-md p-2">Aumentar la ingesta de ácidos grasos omega-3, que se encuentran en pescados grasos como el salmón.</li>
                <li className="bg-green-100 rounded-md p-2">Consumir alimentos ricos en fibra, como frutas, verduras, legumbres y cereales integrales.</li>
                <li className="bg-green-100 rounded-md p-2">Limitar la ingesta de alimentos de origen animal, como la carne y huevos.</li>
                <li className="bg-green-100 rounded-md p-2">Evitar el consumo de alcohol o limitarlo a cantidades moderadas.</li>
                <li className="bg-green-100 rounded-md p-2">Controlar el peso y mantener un índice de masa corporal saludable.</li>
                <li className="bg-green-100 rounded-md p-2">Dejar de fumar o no empezar a hacerlo.</li>
                <li className="bg-green-100 rounded-md p-2">Controlar la diabetes, si la tiene, a través de una dieta adecuada, ejercicios y medicamentos recetados.</li>
                <li className="bg-green-100 rounded-md p-2">Hacer ejercicio al menos 150 minutos a la semana de manera exigente.</li>
                <li className="bg-green-100 rounded-md p-2">Reducir el consumo de alimentos procesados y ricos en grasas, sal, y azúcares añadidos.</li>
                
                </ul>
            </div>
            
          </div>
      </div>
  );
}
