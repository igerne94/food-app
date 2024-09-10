import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';

function Header({ children, className, ...props  }: HeaderProps)  {
    return (
        <header className={cn(className, styles['header'])} {...props}>
            {children}
        </header>
    );
};

export default Header;