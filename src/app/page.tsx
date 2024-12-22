import { Header } from "./components/Header";
import { CardContainer, CardTitle } from "./components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <main>
        <div className="flex flex-col">
          <div className="w-80 border radius-sm flex items-center justify-between mx-auto my-8">
            <input 
              placeholder="Ex.: memória ram"
              type="text"                     
              min={3}
              className="text-lg text-slate-600 bg-transparent border-none outline-none"
            />
            <button className="bg-emerald-500 h-8 w-8 flex items-center justify-center rounded-sm">
              <Image src="search.svg" width={17} height={17} alt="Search icon"/>
            </button>
          </div>
          <CardContainer>
            <CardTitle>Título</CardTitle>
          </CardContainer>
        </div>
      </main>
    </div>
  );
}
