import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Header from "../../Header/Header";
import Input from "../../Input/Input";
import styles from './Login.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { login, userActions } from "../../../store/user.slice";
import { RootState } from "../../../store/store";

export type LoginForm = {
    email: {
        value: string
    };
    password: {
        value: string
    };
};

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { jwt, loginErrorMesssage } = useSelector((s: RootState) => s.user);
    useEffect(() => {
        if (jwt) {
            navigate('/');
        }
    }, [jwt, navigate]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(userActions.clearLoginError());
        const target = event.target as typeof event.target & LoginForm;
        const { email, password } = target;
        await getToken(email.value, password.value);
    };
    
    const getToken = async (email: string, password: string) => {
        dispatch(login({ email, password }));
    };

    return (
        <div className={styles['login']}>
            <Header>Login</Header>
            {loginErrorMesssage && <div className={styles['error']}>{loginErrorMesssage}</div>}
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['field']}>
                    <label htmlFor="">Your email</label>
                    <Input placeholder="Email" name="email" id="email"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="">Your password</label>
                    <Input placeholder="Password" name="password" id="password" type="password"/>
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