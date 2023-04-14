import Iframe from "react-iframe";

export default function ColitisPage() {
  return (
    <div>
      <div className="flex flex-col px-10 pt-36">
        <h1 className="text-4xl font-bold uppercase">Colitis</h1>        
        <div className="flex flex-col">      
          <Iframe
            title="Colitis"
            className="mt-4"
            url="https://www.youtube.com/embed/boktq7rrrCM"
            height="400"
            width="100%"
          />      
        <div className="flex justify-end"><i>Video tomado de Top Doctors LATAM, 2019</i></div>
        </div>
      </div>

      {/* Inicio del grid */}

    
     
      <div className="grid grid-rows-1 md:grid-cols-2 gap-3 mt-5 px-10 text-justify">

            <div className="md:col-span-2">
              <h1 className="subtitle text-xl font-bold">Definición</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">La colitis es una inflamación en el colon (intestino grueso).</li>
                
                </ul>
            </div>
            
            <div className="">
              <h1 className="subtitle text-xl font-bold">Síntomas</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Diarrea, a menudo con sangre o pus</li>
                <li className="bg-green-100 rounded-md p-2">Sangrado rectal (sangre en heces)</li>
                <li className="bg-green-100 rounded-md p-2">Dolor y calambres abdominales</li>
                <li className="bg-green-100 rounded-md p-2">Dolor en el recto</li>
                <li className="bg-green-100 rounded-md p-2">Necesidad imperiosa de defecar</li>
                <li className="bg-green-100 rounded-md p-2">No poder defecar a pesar de la urgencia</li>
                <li className="bg-green-100 rounded-md p-2">Pérdida de peso</li>
                <li className="bg-green-100 rounded-md p-2">Fatiga</li>
                <li className="bg-green-100 rounded-md p-2">Fiebre</li>
                <li className="bg-green-100 rounded-md p-2">En infantes, retraso del crecimiento</li>
                <li className="bg-green-100 rounded-md p-2">Diabetes</li>
                <li className="bg-green-100 rounded-md p-2">Deshidratación</li>
                <li className="bg-green-100 rounded-md p-2">Insuficiencia cardiaca</li>
                
              </ul>
            </div>

            <div className="">
              <h1 className="subtitle text-xl font-bold">Recomendaciones Nutricionales</h1>
              <ul className="ml-3 mt-2 mb-5 space-y-4">
                <li className="bg-green-100 rounded-md p-2">Los cambios sugeridos en la dieta incluyen menor consumo de carnes rojas, productos lácteos, endulzantes artificiales y cafeína.</li>
                <li className="bg-green-100 rounded-md p-2">En caso de presentar colitis ulcerosa se deberán excluir las semillas, nueces, verduras y abundantes granos integrales, ya que es posible que no tolere frutas y hortalizas frescas si contienen mucha fibra.</li>
                <li className="bg-green-100 rounded-md p-2">Tener una alimentación pequeña y frecuente puede incrementar la nutrición total. No comer nada 2 o 3 horas antes de acostarse.</li>
                <li className="bg-green-100 rounded-md p-2">Evitar bebidas heladas o carbonatadas</li>
                <li className="bg-green-100 rounded-md p-2">Asegurarse de que no se consuman alimentos que causen diarrea</li>
                <li className="bg-green-100 rounded-md p-2">Evitar excesos de carnes rojas, embutidos, lácteos, repollo, coliflor</li>
                <li className="bg-green-100 rounded-md p-2">Evitar fumar y tomar alcohol</li>
                <li className="bg-green-100 rounded-md p-2">Tomar bastante agua</li>
                <li className="bg-green-100 rounded-md p-2">Consumir fibra</li>
                <li className="bg-green-100 rounded-md p-2">Evitar harinas refinadas</li>
                <li className="bg-green-100 rounded-md p-2">Evitar leguminosas</li>
                <li className="bg-green-100 rounded-md p-2">Evitar condimentos</li>
                <li className="bg-green-100 rounded-md p-2">No consumir alimentos fritos ni empanizados</li>
                
                </ul>
            </div>
            
          </div>
    </div>
  );
}
