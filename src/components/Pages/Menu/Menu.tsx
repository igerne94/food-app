import Header from "../../Header/Header";
import ItemCard from "../../ItemCard/ItemCard";
import Search from "../../Search/Search";
import styles from './Menu.module.css';
import { useEffect, useState } from "react";
import { PREFIX } from "../../../helpers/.API";
import { ProductInterface } from "../../../interfaces/product.interface";

export function Menu() {
    const [products, setProducts] = useState<ProductInterface[]>([]);

    const getMenu = async () => {
        const res = await fetch(`${PREFIX}products`);
        try {
            if (!res.ok) {
                return;
            } else {
                const data = await res.json() as ProductInterface[];
                setProducts(data);
            }
        } catch (error) {
            console.error('Error:', error);
            return;
        }
    };

    useEffect(() => {
        getMenu();
    });

    return (
        <>
            <div className={styles['head']}>
                <Header>Menu</Header>
                <Search placeholder="Search by dish or ingredient" />
            </div>
            <div>
                {products.map((p) => {
                    return (
                        <ItemCard key={p.id}
                            id={p.id}
                            title={p.name}
                            description={p.ingredients.join(', ')}
                            rating={p.rating}
                            price={p.price}
                            image={p.image}
                        />
                    );
                })}
            </div>
        </>)
}