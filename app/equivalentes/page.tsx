"use client";
import { verduras, frutas, leguminosas } from "../../utils/helper";
import TablaAlimentos from "../../components/Table";

export default function EquivalentesPage() {
  return (
    <main className="mx-2 py-36">
      <h1 className="text-xl text-center mb-10 uppercase">
        Alimentos Equivalentes populares
      </h1>
      <h2 className="text-lg font-bold text-center mb-4">Verduras comunes</h2>
      <TablaAlimentos alimentos={verduras} />

      <h2 className="text-lg font-bold text-center my-4">Frutas comunes</h2>
      <TablaAlimentos alimentos={frutas} />
      
      <h2 className="text-lg font-bold text-center my-4">Leguminosas comunes</h2>
      <TablaAlimentos alimentos={leguminosas} />
    </main>
  );
}
