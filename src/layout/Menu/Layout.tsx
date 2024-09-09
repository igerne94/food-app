import { Link, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button";

export function Layout() {
    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src='/avatar.png' width="100px" height="100px" alt='menu' />
                <div className={styles['name']}>Hanna Khonskaya</div>
                <div className={styles['email']}>Hanna@gmail.com</div>
            </div>
            <div className={styles['menu']}>
                <Link className={styles['link']} to='/'>
                    <img src='/menu-icon.svg' alt='menu' />
                    Menu
                </Link>
                <Link className={styles['link']} to='/cart'>
                    <img src='/cart-icon.svg' alt='cart' />
                    Cart
                </Link>
            </div>
            <Button className={styles['exit']}>
                <img src='/exit-icon.svg' alt='exit' />
            </Button>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
}