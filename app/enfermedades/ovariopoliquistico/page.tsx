import Iframe from "react-iframe"

export default function DislipidemiaPage() {
  return (
    <div>
      <div className="flex flex-col px-10 pt-36">
        <h1 className="text-4xl font-bold uppercase">Ovario Poliquístico</h1>
        
        <div className="flex flex-col">      
          <Iframe
            title="Ovario Poliquístico - Youtube Player"
            className="mt-4"
            url="https://www.youtube.com/embed/vWIaGRUGr9g"
            height="400"
            width="100%"
          />      
        <div className="flex justify-end"><i>Video tomado de Top Doctors LATAM, 2021</i></div>
        </div>
      </div>

      {/* Inicio del grid */}

    
     
      <div className="grid grid-rows-1 md:grid-cols-2 gap-3 mt-5 px-10 text-justify">

            <div className="md:col-span-2">
              <h1 className="subtitle text-xl font-bold">Definición</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">La enfermedad de ovarios poliquísticos (EOPQ) o síndrome de ovarios poliquísticos (SOPQ) es un trastorno endocrino caracterizado por hiperandrogenismo, ovarios poliquísticos con hipertrofia bilateral y resistencia a la insulina.</li>
                
                </ul>
            </div>
            
            <div className="">
              <h1 className="subtitle text-xl font-bold">Síntomas</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Acné</li>
                <li className="bg-green-100 rounded-md p-2">Periodos irregulares, ausentes o sangrados muy abundantes</li>
                <li className="bg-green-100 rounded-md p-2">Aumento de peso</li>
                <li className="bg-green-100 rounded-md p-2">Fatiga</li>
                <li className="bg-green-100 rounded-md p-2">Depresión</li>
                <li className="bg-green-100 rounded-md p-2">Alopesia (caida de cabello)</li>
                <li className="bg-green-100 rounded-md p-2">Hemorragias uterinas</li>
                <li className="bg-green-100 rounded-md p-2">Obesidad localizada en la parte media del abdomen (llantitas)</li>
                <li className="bg-green-100 rounded-md p-2">Acantosis nigricans</li>
                <li className="bg-green-100 rounded-md p-2">Exceso de vello o crecimiento del mismo en cara, bitoge, barbilla, pecho, aureolas, espalda, muslos con patrones masculinos</li>
                
              </ul>
            </div>

            <div className="">
              <h1 className="subtitle text-xl font-bold">Recomendaciones Nutricionales</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Perder peso atenúa los síntomas, se puede lograr con un plan de alimentación y ejercicio.</li>
                <li className="bg-green-100 rounded-md p-2">Reducir la glucosa sanguínea y lípidos elevados.</li>
                <li className="bg-green-100 rounded-md p-2">Consumir de cinco a seis veces al día comidas pequeñas.</li>
                <li className="bg-green-100 rounded-md p-2">Consumir lácteos bajos en grasa, frutas y hortalizas</li>
                <li className="bg-green-100 rounded-md p-2">Evitar dietas bajas en grasas y altas en carbohidratos</li>
                <li className="bg-green-100 rounded-md p-2">Consumo adecuado de fibra</li>
                <li className="bg-green-100 rounded-md p-2">Consumo de ácidos grasos como el omega-3 que está presente en pescados, nueces y linaza</li>
                <li className="bg-green-100 rounded-md p-2">Se debe incluir el cromo a través de la dieta o en complenentos. El cromo se encuentra en el frutas como plátano, manzana, pera; jugos como el de tomate, naranza y uva; algunos panes, carne como jamón, carne de res y pavo, frutos secos, verduras como la lechuga, ejote</li>
                
                
                </ul>
            </div>
            
          </div>
      </div>
  );
}
