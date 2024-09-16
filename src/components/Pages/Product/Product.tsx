import { Await, useLoaderData } from "react-router-dom";
import { ProductInterface } from "../../../interfaces/product.interface";
import { Suspense } from "react";

export function Product() {
    const data = useLoaderData() as { data: ProductInterface };

    return (
        <Suspense fallback={<>Loading now...</>}>
                <Await resolve={data.data}>
                    {({ data }: { data: ProductInterface }) => (
                        <>Product - {data.name}</>
                    )}
                </Await>
        </Suspense>
    );
}