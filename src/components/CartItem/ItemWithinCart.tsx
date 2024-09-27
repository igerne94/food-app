import styles from './ItemWithinCart.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import CartItemProps from './ItemWithinCart.props';

function ItemWithinCart(props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();
    
    const increase = () => {
        dispatch(cartActions.add(props.id));
    };

    const decrease = () => {
    };

    const remove = () => {
    };

    return (
        <div className={styles['item']} >
            <div
                className={styles['image']}
                style={{ backgroundImage: `url('${props.image}')` }}
            >
            </div>
            <div className={styles['description']}>
                <div className={styles['name']}>{props.name}</div>
                <div className={styles['currency']}>{props.price}&nbsp;</div>
            </div>
            <div className={styles['actions']}>
                <button className={styles['button']} onClick={decrease}>
                    <img src="/minus-icon.svg" alt="Remove from cart" />
                </button>
                <div> {props.count} </div>
                <button className={styles['add-to-item']} onClick={increase}>
                    <img src="/cart-button-icon.svg" alt="Add to cart" />
                </button>
                <button className={styles['remove']} onClick={remove}>
                    <img src="/minus-icon.svg" alt="Remove all" />
                </button>
            </div>
        </div>
    );
}

export default ItemWithinCart;