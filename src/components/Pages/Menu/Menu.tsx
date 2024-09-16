import Header from "../../Header/Header";
import Search from "../../Search/Search";
import styles from './Menu.module.css';
import { useEffect, useState } from "react";
import { PREFIX } from "../../../helpers/.API";
import { ProductInterface } from "../../../interfaces/product.interface";
import axios, { AxiosError } from "axios";
import MenuList from "./MenuList";

export function Menu() {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const getMenu = async () => {
        try {
            setIsLoading(true);
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
            const { data } = await axios.get<ProductInterface[]>(`${PREFIX}products`);
            setProducts(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
            if (error instanceof AxiosError) {
                setError(error.message);
            }
            setIsLoading(false);
            return;
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
            <div className={styles['head']}>
                <Header>Menu</Header>
                <Search placeholder="Search by dish or ingredient" />
            </div>
            <div>
                {error && <p>{error}</p>}
                {!isLoading && <MenuList products={products} />}
                {isLoading && <p>Loading..</p>}
            </div>
        </>)
}