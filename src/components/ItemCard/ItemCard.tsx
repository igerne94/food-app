import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css';
import { ItemCardProps } from './ItemCard.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function ItemCard(props: ItemCardProps) {
    const dispatch = useDispatch<AppDispatch>();
    const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(cartActions.add(props.id));
    };

    return (
        <Link to={`/product/${props.id}`} className={styles['link']}>
            <div
                className={styles['card']}
                style={{ backgroundImage: `url('${props.image}}` }}
            >
                <div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
                    <div className={styles['price']}>
                        {props.price}&nbsp;
                        <span className={styles['currency']}>€</span>
                    </div>
                    <button className={styles['add-to-card']} onClick={addToCart}>
                        <img src="/cart-button-icon.svg" alt="Add to cart" />
                    </button>
                    <div className={styles['rating']}>
                        {props.rating}&nbsp;
                        <img src="/star-icon.svg" alt="star-icon" />
                    </div>
                </div>

                <div className={styles['footer']}>
                    <div className={styles['title']}>{props.title}</div>
                    <div className={styles['description']}>{props.description}</div>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard;