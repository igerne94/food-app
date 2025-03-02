import axios from "axios";
import { ProductInterface } from "../../../interfaces/product.interface";
import { PREFIX } from "../../../helpers/.API";

export async function getProductById(id: string | undefined): Promise<{ data: ProductInterface }> {
    try {
        const productResponse = await axios
            .get(`${PREFIX}products/${id}`)
        return productResponse;
    } catch (error) { 
        console.log("Error fetching product: ", error);
        throw error;
    }
}
