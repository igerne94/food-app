import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import Header from "../../Header/Header";
import Input from "../../Input/Input";
import styles from './Login.module.css';

export function Login() {
    return (
        <div className={styles['login']}>
            <Header>Login</Header>
            <form className={styles['form']}>
                <div className={styles['field']}>
                    <label htmlFor="">Your email</label>
                    <Input placeholder="Email" id="email"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="">Your password</label>
                    <Input placeholder="Password" id="password" type="password"/>
                </div>
                <Button appearance="primary">Login</Button>
            </form>
            <div className={styles['links']}>
                <div>Don't have an account?</div>
                <Link to={"/authorization/register"}>Register</Link>
            </div>
        </div>
    );
}