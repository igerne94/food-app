import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, className, appearance = 'secondary', ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                styles['button'],
                styles['accent'],
                className,
                {
                    [styles['primary']]: appearance == 'primary',
                    [styles['secondary']]: appearance == 'secondary'
                }
            )}
            {...props}
        >{children}</button>
    );
}

export default Button;