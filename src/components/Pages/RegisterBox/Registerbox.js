import React, { useState } from 'react';
import './Registerbox.scss';

function Registerbox() {

    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        password: '',
        reppass: '',
        check: false
    });

    const submitAll = () => alert(`data gồm email ${inputs.email}, name ${inputs.name}, password ${inputs.password}, reppassword ${inputs.reppass}, active ${inputs.check}`)

    return (
        <div className='content w-100% h-100vh d-flex align-items-center justify-content-center'>
            <div className='w-500'>
                <div className='w-100% d-flex align-items-center justify-content-center mb-28'>
                    <img className='' src='/images/logoB.png' alt='logo' />
                </div>
                <div className='h-auto w-100% bg-white border-radius-4 px-16 pt-16'>
                    <h4 className='opacity-4 font-size-24 font-weight-normal my-8'>Welcome,</h4>
                    <p className='font-size-17 mb-24'>It only takes a <span className='mx-2 color-green'>few seconds</span> to create your account</p>
                    <hr className='mix-15 d-flex flex-1-1-100% opacity-4 mt-8 mb-16' />
                    <input value={inputs.email} onChange={(e)=> setInputs({...inputs, email:e.target.value})} className='w-95% font-size-16 border-radius-4 border py-7 px-12 mb-16' type='text' placeholder='Email here...' />
                    <input value={inputs.name} onChange={(e)=> setInputs({...inputs, name:e.target.value})} className='w-95% font-size-16 border-radius-4 border py-7 px-12 mb-16' type='text' placeholder='Name here...' />
                    <input value={inputs.password} onChange={(e)=> setInputs({...inputs, password:e.target.value})} className='w-95% font-size-16 border-radius-4 border py-7 px-12 mb-16' type='text' placeholder='Password here...' />
                    <input value={inputs.reppass} onChange={(e)=> setInputs({...inputs, reppass:e.target.value})} className='w-95% font-size-16 border-radius-4 border py-7 px-12 mb-16' type='text' placeholder='Repeat Password here...' />
                    <div className='d-flex align-items-center'>
                        <input checked={inputs.isActive} onChange={()=> setInputs({...inputs, check: !inputs.check})} className='check-input ml-1' type='checkbox' />
                        <p className='ml-8 font-size-14'>Accept our <a className='color-rgb-blue text-decoration-none' href='/'>Terms and Conditions</a>.</p>
                    </div>
                    <hr className='mix-15 my-16 bg-gray-200 opacity-5' />
                    <h6 className='font-size-15 font-weight-normal mb-16 d-flex align-items-center'>
                        Already have an account?
                        <p className='color-blue text-decoration-none ml-8'><a className='color-rgb-blue text-decoration-none' href='/login'>Sign in</a> | <a className='color-rgb-blue text-decoration-none' href='/forgotpassword'>Recover Password</a></p>
                    </h6>
                    <div className='d-flex align-items-center justify-content-center h-70 border-top bg-gray-200 mix-16 border-radius-4'>
                        <button className='btn button-submit cursor font-size-16 py-10 px-32 color-light bg-rgb-blue font-weight-bold border-radius-50' onClick={submitAll}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registerbox;
