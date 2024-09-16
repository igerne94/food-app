import ItemCard from "../../../ItemCard/ItemCard"
import { MenuListProps } from "./MenuList.props";
import styles from './MenuList.module.css';

export function MenuList({ products }: MenuListProps) {
    return (
        <div className={styles['wrapper']}>
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
    ); 
}

export default MenuList;