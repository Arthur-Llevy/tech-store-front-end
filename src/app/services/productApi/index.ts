import axios, { AxiosResponse } from "axios";
import { ProductType } from "./types"; 

axios.defaults.baseURL = "http://localhost:5062";

const getAllProducts = async (): Promise<ProductType[]> => {
    const products = await axios.get("/product");
    return products.data;
}

const createProduct = async (name: string): Promise<ProductType> => {
    console.log(name)
    try {
        const response = await axios.post("/product", {
            name: name
        });

        return response.data;
    } catch (error) {
        throw new Error(`Falha ao criar um novo produto: ${error}`);
    }
}

export { getAllProducts, createProduct };