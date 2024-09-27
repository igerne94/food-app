import { useSelector } from "react-redux";
import Header from "../../Header/Header";
import { RootState } from "../../../store/store";
// import ItemWithinCartProps from "../../CartItem/ItemWithinCart.props";
import ItemWithinCart from "../../CartItem/ItemWithinCart";
import { useEffect, useState } from "react";
import { ProductInterface } from "../../../interfaces/product.interface";
import axios from "axios";
import { PREFIX } from "../../../helpers/.API";

export function Cart() /*: ItemWithinCartProps*/ {
    const [cardProducts, setCardProducts] = useState<ProductInterface[]>([]);
    const items = useSelector((s: RootState) => s.cart.items);
    const getItem = async (id: number) => {
        const { data } = await axios.get<ProductInterface>(`${PREFIX}products/${id}`);
        return data;
    }

    const loadAllItems = async () => { 
        const res = await Promise.all(items.map(i => getItem(i.id)));
        setCardProducts(res);
    };

    useEffect(() => {
        loadAllItems()
    }, [items]);
    
    return (
        <>
            <Header>Cart</Header>
            {items.map(item => {
                const product = cardProducts.find(p => p.id === item.id);
                if (!product) return;
                return <ItemWithinCart key={item.id} count={item.count} {...product} />
            })}
            
        </>
    );
}