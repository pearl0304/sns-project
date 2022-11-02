import React, {ChangeEvent, useState} from "react";
import moment from "moment";

// Interface
import {UserInputInterface} from "../interfaces/user.interface";

// Firebase
import {firebaseAuth, fireStoreJob} from "../initFirebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {collection, addDoc} from "firebase/firestore";

// Css
import {UserWrapper} from "../css/User.styled";
import {Button, Input} from "@mui/material";
import {Link} from "react-router-dom";

export const SignUp = () => {
    const firestore_path = 'users';
    const [inputs, setInputs] = useState<UserInputInterface>({
        email: "",
        password: "",
        displayName: ""
    })

    const {email, password, displayName} = inputs;

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
        setInputs({...inputs, [name]: value});
    }

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        await createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                await addDoc(collection(fireStoreJob, firestore_path), {
                    uid: user.uid,
                    ...inputs,
                    date_created: moment().utc().format()
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`${errorCode} - ${errorMessage}`)
            });
    }


    return <UserWrapper>
        <div className={'doc-title'}>
            <span><strong>SIMPLE</strong></span>
        </div>
        <article id={'mainContent'} className={'content-article'}>
            <div className={'con-login'}>
                <div className={'login-form'}>
                    <form onSubmit={onSubmit}>
                        <Input onChange={onChange} name={'email'} value={email} type={'email'}
                               placeholder={'Please enter email'} required={true}/>
                        <Input onChange={onChange} name={'password'} value={password} type={'password'}
                               placeholder={'Please enter password'}
                               required={true}/>
                        <Input onChange={onChange} name={'displayName'} value={displayName} type={'text'}
                               placeholder={'Please enter display'}
                               required={true}/>
                        <Button type={'submit'} variant="contained">Sign Up</Button>
                    </form>
                    <div className={'cont-link'}>
                        <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}>Log In</Link>
                    </div>
                </div>
            </div>
        </article>

    </UserWrapper>
}