import React, { useState, useEffect, useRef, useContext } from "react";
import './Login.scss'
import Context from "../../ContextAPI/Context";
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPwdError] = useState(false);
    const [emailFormatError, setEmailFormatError] = useState(false);
    

    const handleEmail = (e) => {
        let userNameValue = e.target.value.trim();
        setEmail(userNameValue);
    };

    const handlePassword = (e) => {
        let passwordValue = e.target.value;     
        setPassword(passwordValue);
    };

    const validateEmail = (email) => {
		let emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
		return emailPattern.test(email);
	}

    return (
        <Context.Consumer>
            {(context) => (
                <div className='login-container center'>
                    <div className='form-container '>
                        <div className='center login-ttl'>
                            Login
                        </div>

                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='input-container '>
                                <div>
                                    <div class="form-floating mb-3" >
                                        <input type="email"
                                            class="form-control "
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            onChange={(e) => {
                                                handleEmail(e)
                                            }}
                                            required />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {emailError ? <div className='validation-txt '>Please fill email !</div> : ''}
                        {emailFormatError ? <div className='validation-txt '>Invalid email !</div> : ''} 
                        {context.loginErr ? <div className='validation-txt '>Login Error !</div> : ''}

                        <div className='center'>
                            <div className='input-container '>
                                <div>
                                    <div class="form-floating mb-3 " style={{ display: 'flex' }} >

                                        <input type={'password'}
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com" required
                                            onChange={(e) => {
                                                handlePassword(e)
                                            }} />

                                        <label for="floatingInput">Password</label>
                                        
                                    </div>

                                </div>

                            </div>
                        </div>
                                             
                        {passwordError ? <div className='validation-txt '>Please fill password !</div> : ''}
                        {context.loginErr ? <div className='validation-txt '>Login Error !</div> : ''}

                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='login-btn center '
                                onClick={() => {
                                    setPwdError(false);
                                    setEmailError(false);
                                    setEmailFormatError(false);
                                    if (password === "" && email !== "") {
                                        setPwdError(true);
                                    }else if(email === "" &&  password !== ""){
                                            setEmailError(true);
                                            
                                    }else if(email === "" &&  password == ""){
                                        setPwdError(true);
                                        setEmailError(true);
                                }
                                    else if(email !== "" && password !== ""){

                                        if(validateEmail(email)){
                                            const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
                                             context?.Login(email, hashedPassword)
                                        }else{
                                            setEmailFormatError(true);
                                        }

                                       
                                    }
                                }}>
                                Login
                            </div>
                        </div>



                    </div>

                </div>
            )}
        </Context.Consumer>
    )
}

export default Login