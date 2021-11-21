import React, { useState } from 'react';
import './LoginBox.scss';

function LoginBox() {

    const [inputs, setInputs] = useState({
        inputEmail: '',
        inputPassword: '',
        isActive: false
    });

    const handleSubmit = () => {
        alert(`Kết quả gồm: email: ${inputs.inputEmail}, password: ${inputs.inputPassword}, checkbox: ${inputs.isActive}`)
    };

    return (
        <div className='content w-100% h-100vh d-flex align-items-center justify-content-center'>
            <div>
                <div className='w-100% d-flex align-items-center justify-content-center mb-28'>
                    <img className='' src='/images/logoB.png' alt='logo' />
                </div>
                <div className='h-auto w-470 bg-light border-radius-4 px-16 pt-16'>
                    <h4 className='opacity-4 font-size-24 font-weight-normal my-8 text-align-center'>Welcome back,</h4>
                    <p className='font-size-17 text-align-center mb-24'>Please sign in to your account below.</p>
                    <input value={inputs.inputEmail} onChange={(e)=> setInputs({...inputs, inputEmail:e.target.value})} className='w-95% font-size-14 border-radius-4 border py-7 px-12 mb-16' type='text' placeholder='Email here...' />
                    <input value={inputs.inputPassword} onChange={(e)=> setInputs({...inputs, inputPassword:e.target.value})} className='w-95% font-size-14 border-radius-4 border py-7 px-12 mb-16' type='text' placeholder='Password here...' />
                    <div className='d-flex align-items-center'>
                        <input checked={inputs.isActive} onChange={()=> setInputs({...inputs, isActive: !inputs.isActive})} className='check-input ml-1' type='checkbox' />
                        <p className='ml-8 font-size-14'>Keep me logged in</p>
                    </div>
                    <hr className='w-100% my-16 bg-gray-200 opacity-5' />
                    <h6 className='font-size-15 font-weight-normal mb-16'>
                        No account?
                        <a className='color-blue text-decoration-none ml-8' href='/register'>Sign up now</a>
                    </h6>
                    <div className='d-flex align-items-center justify-content-right h-70 border-top bg-gray-200 mix-16 border-radius-4'>
                        <a className='font-size-13 cursor py-8 px-16 mx-8 text-decoration-none color-rgb-blue font-weight-bold' href='/forgotpassword'>Recover Password</a>
                        <button className='btn cursor font-size-13 py-9 mr-16 px-16 color-light bg-rgb-blue font-weight-bold border-radius-6' onClick={handleSubmit}>Login to Dashboard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBox;
