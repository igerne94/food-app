import ItemCard from "../../ItemCard/ItemCard"
import { MenuListProps } from "./MenuList.props";

export function MenuList({ products }: MenuListProps) {
    return products.map((p) => {
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
    })
}

export default MenuList;