"use client"

import Image from "next/image";
import { deleteProduct } from "@/app/services/productApi";

export function CardContainer ({ children, id }: { children: React.ReactNode, id: number }) {
    const handleDelete = async () => {
        const confirm: boolean = window.confirm("Tem certeza que deseja excluir este produto?");

        if (confirm) {
            try {
                await deleteProduct(id);
            } catch (error) {
                throw new Error(`${error}`);
            }
        }
    }
    
    return (
        <div className="mx-auto w-80 bg-gray-300 h-16 flex justify-between p-4">
            {children}
            <div className="flex gap-x-4">
                <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-blue-500">
                    <Image alt="Edit icon" width={17} height={17} src="pencil.svg"/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-red-600" onClick={handleDelete}>
                    <Image alt="Delete icon" width={17} height={17} src="trash.svg"/>
                </button>
            </div>
        </div>
    )
}