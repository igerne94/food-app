import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Header from "../../Header/Header";
import Input from "../../Input/Input";
import styles from './Login.module.css';
import axios, { AxiosError } from "axios";
import { PREFIX } from "../../../helpers/.API";
import { useState } from "react";
import { LoginResponse } from "../../../interfaces/auth.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { userActions } from "../../../store/user.slice";

export type LoginForm = {
    email: {
        value: string
    };
    password: {
        value: string
    };
};

export function Login() {
    const [error, setError] = useState<string | null>();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        const target = event.target as typeof event.target & LoginForm;
        const { email, password } = target;
        await getToken(email.value, password.value);
    };
    
    const getToken = async (email: string, password: string) => {
        try { 
            const { data } = await axios.post<LoginResponse>(`${PREFIX}auth/login`, {
                email,
                password
            });
            localStorage.setItem('jwt_token', data.access_token);
            dispatch(userActions.addJwt(data.access_token));
            navigate('/');
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message);
            }
        }
    };

    return (
        <div className={styles['login']}>
            <Header>Login</Header>
            {error && <div className={styles['error']}>{error}</div>}
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