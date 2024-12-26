"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { CardContainer, CardTitle } from "./components/Card";
import Image from "next/image";
import type { ProductType } from "./types";
import { PopUp } from "./components/Popups/CreateProduct";
import { getAllProducts } from "./services/productApi";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState<string>("");

  const getProducts = async () => {
    const result = await getAllProducts();
    setProducts(result);
    setFilteredProducts(result); 
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredProducts(products); 
    } else {
      setFilteredProducts(products.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase())
      ));
    }
  }, [search, products]);

  return (
    <div className="w-full h-screen bg-white relative">
      <Header />
      <main>
        <div className="flex flex-col h-screen">
          <div className="w-80 border radius-sm flex items-center justify-between mx-auto my-8">
            <input 
              placeholder="Ex.: memória ram"
              type="text"                
              onChange={e => setSearch(e.target.value)}     
              minLength={3}
              className="text-lg text-slate-600 bg-transparent border-none outline-none"
            />
            <button className="bg-emerald-500 h-8 w-8 flex items-center justify-center rounded-sm">
              <Image src="search.svg" width={17} height={17} alt="Search icon"/>
            </button>
          </div>
          <div className="flex flex-col gap-y-4">
            {filteredProducts.map((product: ProductType) => (
              <CardContainer key={product.id} id={product.id}>
                <CardTitle>{product.name}</CardTitle>
              </CardContainer>
            ))}
          </div>
          <PopUp />
        </div>
      </main>
    </div>
  );
}
