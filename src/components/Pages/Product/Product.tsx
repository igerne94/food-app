import { Await, useLoaderData } from "react-router-dom";
import { ProductInterface } from "../../../interfaces/product.interface";
import { Suspense } from "react";

export function Product() {
    const data = useLoaderData() as { data: ProductInterface };

    return (
        <Suspense fallback={<>Loading now...</>}>
            {/* Since the loader in main.tsx uses defer(), 
                data is not immediately available 
                when the component mounts. */}
            {/* Await waits for data to resolve. */}
            {/* Instead of blocking the render, <Await> suspends 
                rendering until data is available */}
            <Await resolve={data}>
                {/* Once data resolved, the function executes */}
                {( product: ProductInterface ) => (
                    <>Product - {product.name}</>
                )}
            </Await>
            {/* Used <Await> instead of UseEffect because:
                1. used defer() for async fetching
                2. want to suspend rendering while waiting for data
                3. dont want manually manage state  */}
        </Suspense>
    );
}