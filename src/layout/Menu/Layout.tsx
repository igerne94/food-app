import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button";
import cn from 'classnames';
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userProfile } from "../../store/user.slice";
import { useEffect } from "react";

export function Layout() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const profile = useSelector((s: RootState) => s.user.userProfile);

    useEffect(() => {
        dispatch(userProfile());
     }, [dispatch]);
    
    const logout = () => {
        dispatch(userActions.logout());
        navigate("/authorization/login");
    };

    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src='/avatar.png' width="100px" height="100px" alt='menu' />
                <div className={styles['name']}>{profile?.name}</div>
                <div className={styles['email']}>{profile?.email}</div>
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
            <Button className={styles['exit']} onClick={logout}>
                <img src='/exit-icon.svg' alt='exit' />
                Exit
            </Button>
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>
}