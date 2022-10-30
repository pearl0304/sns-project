import React, {useState} from "react";

// Interface
import {UserInputInterface} from "../interfaces/user.interface";
// Css
import {UserWrapper} from "../css/User.styled";
import {Link} from "react-router-dom";

export const Login = () => {
    const [inputs, setInputs] = useState<UserInputInterface>({
        email: "",
        password: ""
    })

    const {email, displayName, password} = inputs;

    return <UserWrapper>
        <div>
            <form>
                <input type={'email'}/>
                <input type={'password'}/>
                <input type={'submit'}/>
            </form>
            <div>
                <Link to={'/signup'} style={{textDecoration: 'none'}}>Not a member yet?</Link>
            </div>
        </div>
    </UserWrapper>
}