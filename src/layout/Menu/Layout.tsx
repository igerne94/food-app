import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button";
import cn from 'classnames';

export function Layout() {
    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src='/avatar.png' width="100px" height="100px" alt='menu' />
                <div className={styles['name']}>Hanna Khonskaya</div>
                <div className={styles['email']}>Hanna@gmail.com</div>
            </div>
            <div className={styles['menu']}>
                <NavLink
                    to='/'
                    className={
                        ({ isActive }) => cn(
                            styles['link'],
                            { [styles['active']]: isActive }
                        )
                    }
                >
                    <img src='/menu-icon.svg' alt='menu' />
                    Menu
                </NavLink>
                <NavLink
                    to='/cart'
                     className={
                        ({ isActive }) => cn(
                            styles['link'],
                            { [styles['active']]: isActive }
                        )
                    }
                >
                    <img src='/cart-icon.svg' alt='cart' />
                    Cart
                </NavLink>
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