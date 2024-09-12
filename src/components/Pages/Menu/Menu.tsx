import Header from "../../Header/Header";
import ItemCard from "../../ItemCard/ItemCard";
import Search from "../../Search/Search";
import styles from './Menu.module.css';

export function Menu() {
    return (
        <>
            <div className={styles['head']}>
                <Header>Menu</Header>
                <Search placeholder="Search by dish or ingredient" />
            </div>
            <div>
                <ItemCard
                    id={1}
                    title="Pizza"
                    description="Italian pizza with olives"
                    price={10}
                    rating={4}
                    image="/product-demo.png"
                />
            </div>
        </>)
}