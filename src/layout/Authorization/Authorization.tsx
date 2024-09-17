import styles from './Authorization.module.css';
import { Outlet } from 'react-router-dom';

export function Authorization() {
    return <div className={styles['layout']}>
        <div className={styles['logo']}>
            <img src='/logo.svg' alt='logo' />
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>

}