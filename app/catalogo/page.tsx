import Iframe from "react-iframe";

export default function ColitisPage() {
  return (
    <div>
      <div className="flex flex-col px-10 pt-36">
        <h1 className="text-4xl font-bold uppercase">Catálogo de Alimentos</h1>        
        <div className="flex flex-col">      
          <Iframe
          allowFullScreen={true}            
            title="Colitis"
            className="mt-4"
            url="https://heyzine.com/flip-book/fed89600b2.html"
            height="600"
            width="100%"
          />        
        </div>
      </div>

      {/* Inicio del grid */}      
    
     
      
    </div>
  );
}
