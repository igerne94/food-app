import Header from "../../Header/Header";
import Search from "../../Search/Search";
import styles from './Menu.module.css';
import { useEffect, useState } from "react";
import { PREFIX } from "../../../helpers/.API";
import { ProductInterface } from "../../../interfaces/product.interface";
import axios, { AxiosError } from "axios";
import MenuList from "./MenuList/MenuList";

export function Menu() {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();
    const [filter, setFilter] = useState<string>();

    useEffect(() => {
        getMenu(filter);
    }, [filter]);
    
    const getMenu = async (filter: string | undefined) => {
        try {
            setIsLoading(true);
            const searchParam = filter ? `?name=${filter}` : '';
            const { data } = await axios.get<ProductInterface[]>(`${PREFIX}products${searchParam}`);
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

    const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    return (
        <>
            <div className={styles['head']}>
                <Header>Menu</Header>
                <Search placeholder="Search by dish or ingredient" onChange={updateFilter}/>
            </div>
            <div>
                {error && <p>{error}</p>}
                {!isLoading && products.length>0 && <MenuList products={products} />}
                {!isLoading && products.length === 0 && <p>No products found</p>}
                {isLoading && <p>Loading..</p>}
            </div>
        </>)
}

export default Menu;