import React, { useState, useEffect } from 'react'
import Context from "../../ContextAPI/Context";
import './AddStaff.scss';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import validator from 'validator'

function AddStaff() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const [strongMessage, setStrongMessage] = useState('')
 

  useEffect(()=>{
    if(localStorage.getItem('userType') !== 'ADMIN'){
      navigate('/loginAdmin')
    }
  })
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState(false)
    const [password, setPassword] = useState("")
    const [userType, setUserType] = useState("")
    const [formError, setFromError] = useState(false);


    const handleEmail = (e) => {
        let email = e.target.value.trim();
        setEmail(email);
    };

    const handlePassword = (e) => {
        let passwordValue = e.target.value.trim();

      if (validator.isStrongPassword(passwordValue, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setStrongMessage('Is Strong Password')
        setErrorMessage('')
        setPassword(passwordValue);
      } else {
        setErrorMessage('Is Not Strong Password')
        setStrongMessage('')
        setPassword(passwordValue);
      }     

    };

    const checkEmail = (email) => {
        let emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        return emailPattern.test(email);
    }

    return (
        <Context.Consumer>
            {(context) => (
                <div className=' center'>
                    <div className='form-container-cu '>
                        <div className='center addUser-title'>
                            Add Staff Member
                        </div>

                        <div className='center' style={{ marginTop: '30px', color:'black' }}>
                            <div className='flex-form'>
                                <div>
                                    <div class="form-floating mb-3" style={{ width: '650%' }} >
                                        <input type="text"
                                            class="form-control "
                                            id="floatingInput"
                                            placeholder="sample@gmail.com"
                                            value={email}
                                            onChange={(e) => {
                                                handleEmail(e)
                                            }}
                                            required />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {emailErr ? <div className='validation-txt ' style={{ marginLeft: '130px' }}>Please Use Valid Email</div> : ''}

                        <div className='center' style={{ marginTop: '10px', width: '50%', fontSize: '23px' }}>
                            <div className='flex-form' style={{ width: '100%' }}>
                                <div style={{ padding: '10px' }}>
                                    <input type="radio" id="contactChoice1" name="contact" value="MANAGER" onChange={() => {
                                        setUserType('MANAGER')
                                    }} />

                                    <label for="floatingInput" style={{ marginLeft: '10px' }}>Manager</label>

                                </div>

                                <div style={{ padding: '10px', marginLeft: '20px' }}>
                                    <input type="radio" id="contactChoice1" name="contact" value="WORKER" onChange={() => {
                                        setUserType('WORKER')
                                    }} />

                                    <label for="floatingInput" style={{ marginLeft: '10px' }}>Worker</label>
                                </div>

                            </div>
                        </div>



                        <div className='center' style={{ marginTop: '30px' , color:'black' }} >
                            <div className='flex-form'>
                                <div>
                                    <div class="form-floating mb-3 " style={{ width: '650%' }} >

                                        <input type={'password'}
                                            class="form-control"
                                            id="floatingInput"
                                             value={password}
                                            placeholder="password123" required
                                            onChange={(e) => {
                                                handlePassword(e)
                                            }} />

                                        <label for="floatingInput">Password</label>

                                    </div>

                                    {errorMessage === '' ? null :
                                        <span style={{
                                        fontWeight: 'bold',
                                        fontSize:'25px',
                                        color: 'red',
                                        }}>{errorMessage}</span>}

{strongMessage === '' ? null :
                                        <span style={{
                                        fontWeight: 'bold',
                                        fontSize:'25px',
                                        color: 'yellow',
                                        }}>{strongMessage}</span>}

                                </div>
                            </div>


                        </div>

                        {formError ? <div className='validation-txt ' style={{ marginLeft: '130px', fontSize: '30px', color:'orange' }}>Cannot pass empty values!!!</div> : ''}

                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='create-btn center '
                                onClick={() => {
                    
                                    setFromError(false);
                                    if(email ==="" || userType ===""|| password === ""){
                                        setFromError(true);
                                    }

                                    else if (checkEmail(email) === false) {
                                        setFromError(false);
                                        setEmailErr(true)
                                    }
                                    else {
                                        const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
                                        context?.AddStaff(email, userType, hashedPassword)
                                        setEmail('')
                                        setPassword('')
                                        setUserType('')
                            
                                    }
                                    
                                }}>
                                Add Member
                            </div>
                        </div>
                    </div>

                </div>
            )
            }
        </Context.Consumer >
    )
}

export default AddStaff