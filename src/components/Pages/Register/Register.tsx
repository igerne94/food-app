import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Header from "../../Header/Header";
import Input from "../../Input/Input";
import styles from '../Login/Login.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { register, userActions } from "../../../store/user.slice";
import { RootState } from "../../../store/store";

export type RegistrationForm = {
    name: {
        value: string
    },
    email: {
        value: string
    };
    password: {
        value: string
    };
};

export function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { jwt, registerErrorMesssage } = useSelector((s: RootState) => s.user);
    useEffect(() => {
        if (jwt) {
            navigate('/');
        }
    }, [jwt, navigate]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(userActions.clearRegisterError());
        const target = event.target as typeof event.target & RegistrationForm;
        const { name, email, password } = target;
        dispatch(register({ name: name.value, email: email.value, password: password.value }));
    };
    
    return (
        <div className={styles['login']}>
            <Header>Register</Header>
            {registerErrorMesssage && <div className={styles['error']}>{registerErrorMesssage}</div>}
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['field']}>
                    <label htmlFor="">Your name</label>
                    <Input placeholder="Password" name="name" id="name"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="">Your email</label>
                    <Input placeholder="Email" name="email" id="email"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="">Your password</label>
                    <Input placeholder="Password" name="password" id="password" type="password"/>
                </div>
                <Button appearance="primary">Register</Button>
            </form>
            <div className={styles['links']}>
                <div>Already have an account?</div>
                <Link to={"/authorization/login"}>Login</Link>
            </div>
        </div>
    );
}