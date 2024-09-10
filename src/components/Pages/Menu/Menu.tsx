import Header from "../../Header/Header";
import Search from "../../Search/Search";
import styles from './Menu.module.css';

export function Menu() {
    return (
        <>
            <div className={styles['head']}>
                <Header>Menu</Header>
                <Search placeholder="Search by dish or ingredient" />
            </div>
        </>)
}