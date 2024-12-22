"use client"

import { useState } from "react";
import Image from "next/image";
import { createProduct } from "@/app/services/productApi/";

export function PopUp () {
    const [popupIsVisible, setPopupIsVisible] = useState<boolean>(false);
    const [productName, setProductName] = useState<string>("");

    const changePopupVisibility = () => {
        setPopupIsVisible(previousVallue => !previousVallue);
    }

    const createNewProduct = async () => {
        try {
            const newProduct = await createProduct(productName);
        } catch (error) {
            throw new Error(`Falha ao criar um novo produto: ${error}`)
        }
    }

    if (popupIsVisible) {
        return (
            <div className="w-full h-full absolute">
                <div className="bg-gray-200  w-80 h-80 flex flex-col items-center absolute inset-1/2 rounded-sm transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-slate-900 text-lg py-4">Criar novo produto</h2>
                    <div className="radius-sm mx-auto my-8 flex flex-col items-center justify-between gap-y-4">
                        <input 
                            placeholder="Ex.: memória ram"
                            type="text"                     
                            min={3}
                            className="text-lg text-slate-600 bg-transparent outline-none border border-b-black"
                            onChange={e => setProductName(e.target.value)}
                        />
                        <button className="text-slate-100 font-bold rounded-sm w-56 h-8 bg-emerald-500" onClick={createNewProduct}>Criar</button>
                        <button className="text-slate-100 font-bold rounded-sm w-56 h-8 bg-red-600" onClick={changePopupVisibility}>Cancelar</button>
                    </div>
                </div>
                <button className="bg-emerald-500 rounded-full p-4 fixed mt-80vh ml-80vw" onClick={changePopupVisibility}>
                    <Image src="more.svg" height={32} width={32} alt="More icon"/>
                </button>
            </div>
        );
    }

    return <>
        <button className="bg-emerald-500 rounded-full p-4 fixed mt-80vh ml-80vw" onClick={changePopupVisibility}>
            <Image src="more.svg" height={32} width={32} alt="More icon"/>
        </button>
    </>
}