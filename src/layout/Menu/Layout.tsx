import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import cn from 'classnames';

export function Layout() {
    const location = useLocation();

    useEffect(() => { 
        console.log(location.pathname);
    }, [location]);

    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src='/avatar.png' width="100px" height="100px" alt='menu' />
                <div className={styles['name']}>Hanna Khonskaya</div>
                <div className={styles['email']}>Hanna@gmail.com</div>
            </div>
            <div className={styles['menu']}>
                <Link
                    to='/'
                    className={cn(styles['link'], {
                    [styles['active']]: location.pathname === '/'
                    })}
                >
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