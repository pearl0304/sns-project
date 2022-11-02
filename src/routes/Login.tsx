import React, {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";

// Firebase
import {firebaseAuth} from "../initFirebase";
import {signInWithEmailAndPassword} from "firebase/auth";

// Interface
import {UserInputInterface} from "../interfaces/user.interface";
// Css
import {UserWrapper} from "../css/User.styled";
import {Button, Input} from "@mui/material";


export const Login = () => {
    const [inputs, setInputs] = useState<UserInputInterface>({
        email: "",
        password: ""
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
        setInputs({...inputs, [name]: value});
    }

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('user', user);
                document.location.href = '/feed'
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`${errorCode} - ${errorMessage}`);
            });
    }

    const {email, password} = inputs;

    return <UserWrapper>
        <div className={'doc-title'}>
            <span><strong>SIMPLE</strong></span>
        </div>
        <article id={'mainContent'} className={'content-article'}>
            <div className={'con-login'}>
                <div className={'login-form'}>
                    <form onSubmit={onSubmit}>
                        <Input onChange={onChange} name={'email'} value={email} placeholder={'Enter your email'}
                               type={'email'}/>
                        <Input onChange={onChange} name={'password'} value={password}
                               placeholder={'Enter your password'}
                               type={'password'}/>
                        <Button type={'submit'} variant="contained">Log In</Button>
                    </form>
                    <div className={'cont-link'}>
                        <Link to={'/signup'} style={{textDecoration: 'none', color: 'inherit'}}>Not a member yet?</Link>
                    </div>
                </div>
            </div>
        </article>
    </UserWrapper>
}