import { useLoaderData } from "react-router-dom";
import { ProductInterface } from "../../../interfaces/product.interface";

export function Product() {
    const data = useLoaderData() as ProductInterface;

    return <>Product - {data.name}</>
}