import React, { useState, useEffect } from 'react';
import './Register.scss';

const dataSlide = [
    {
        class: 'content-slide2',
        classout: '.slide-none2',
        heading: "Scalable, Modular, Consistent",
        passage: "Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components",
    }
];

function Register() {

    const [inputs, setInputs] = useState({
        inputEmail: '',
        inputName: '',
        inputPassword: '',
        inputResetPassword: '',
        isActive: false
    });

    const handleSubmit = () => {
        alert(`Kết quả gồm: email: ${inputs.inputEmail}, password: ${inputs.inputPassword}, checkbox: ${inputs.isActive}`)
    };

    return (
        <div className='d-flex'>
            <div className="col-md-3 background opacity-8 order-last my-1 overflow-hidden w-auto">
                <div className='d-block my-auto mx-auto w-70%'>
                    <h4 className='w-100% d-flex justify-content-center align-items-center font-size-28 mb-24 color-light font-weight-normal'>{dataSlide[0].heading}</h4>
                    <p className='w-100% text-align-center font-size-16 opacity-7 mb-16 color-light'>{dataSlide[0].passage}</p>
                </div>
            </div>
            <div className="col-md-9 form-login d-flex justify-content-center h-100vh">
                <div className='w-75%'>
                    <img className='mb-48' src='/images/logoA.png' alt='logo' />
                    <h4 className='mb-8'>
                        <span className='font-size-24 font-weight-lighter d-flex flex-1-0-100% mb-8 opacity-6'>Welcome,</span>
                        <span className='font-size-18 font-weight-lighter d-flex flex-1-0-100% mb-24'>It only takes a <span className='color-green mx-4'>few seconds</span> to create your account</span>
                    </h4>
                    <div className='row d-flex w-100%'>
                        <div className="col-6 d-block">
                            <h5 className='font-size-14 font-weight-100 h-38 w-92%'>Email</h5>
                            <input value={inputs.inputEmail} className='w-92% py-8 px-12 mit-10 border border-radius-4 font-size-14 line-height-1' type='text' placeholder='Email here...' onChange={(e)=> setInputs({...inputs, inputEmail:e.target.value})} />
                        </div>
                        <div className="col-6 d-block">
                            <h5 className='font-size-14 font-weight-100 w-92% h-38'>Name</h5>
                            <input value={inputs.inputPassword} className='w-92% py-8 px-12 mit-10 mb-10 border border-radius-4 font-size-14 line-height-1' type='text' placeholder='Name here...' onChange={(e)=> setInputs({...inputs, inputName:e.target.value})} />
                        </div>
                    </div>
                    <div className='row d-flex w-100% my-8'>
                        <div className="col-6 d-block">
                            <h5 className='font-size-14 font-weight-100 h-38 w-92%'>Password</h5>
                            <input value={inputs.inputEmail} className='w-92% py-8 px-12 mit-10 border border-radius-4 font-size-14 line-height-1' type='text' placeholder='Password here...' onChange={(e)=> setInputs({...inputs, inputPassword:e.target.value})} />
                        </div>
                        <div className="col-6 d-block">
                            <h5 className='font-size-14 font-weight-100 w-92% h-38'>Reset Password</h5>
                            <input value={inputs.inputPassword} className='w-92% py-8 px-12 mit-10 mb-10 border border-radius-4 font-size-14 line-height-1' type='text' placeholder='Reset Password here...' onChange={(e)=> setInputs({...inputs, inputResetPassword:e.target.value})} />
                        </div>
                    </div>
                    <div className='d-flex align-items-center align-content-center my-24'>
                        <input checked={inputs.isActive} className='style-check-input ml-5' type='checkbox' id='checkbox-input' onChange={()=> setInputs({...inputs, isActive: !inputs.isActive})}/>
                        <label className='pl-10 font-size-14' for='checkbox-input' >Accept our <a className='text-decoration-none color-blue' href='/'>Terms and Conditions</a>.</label>
                    </div>
                    <div className='d-flex align-items-center align-content-center justify-content-space-between'>
                        <p className='font-size-20 cursor py-8 text-decoration-none font-weight-normal'>Already have an account? <a className='color-blue text-decoration-none' href='/login'>Sign in</a></p>
                        <button className='btn button-submit cursor font-size-18 py-10 px-32 color-light bg-rgb-blue font-weight-bold border-radius-50 cursor' onClick={handleSubmit}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
