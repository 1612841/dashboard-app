import React, { useState } from 'react';
import './index.css';

function LoginBox() {

    const [inputone, setInputone] = useState('');
    const [inputtwo, setInputtwo] = useState('');
    const [inputthree, setInputthree] = useState(false);
    const [allValue, setAllValue] = useState({
        email: '',
        password: '',
        isActive: false
    });

    const handleChangeInputOne = (e) => {
        setInputone(e.target.value);
        setAllValue({
            ...allValue,
            email: e.target.value
        })
    };
    const handleChangeInputTwo = (e) => {
        setInputtwo(e.target.value);
        setAllValue({
            ...allValue,
            password: e.target.value
        })
    }
    const handleChangeInputThree = () => {
        setInputthree(!inputthree);
        setAllValue({
            ...allValue,
            isActive: !inputthree
        })
    }
    const handleSubmit = () => {
        alert(`Kết quả gồm: email: ${allValue.email}, password: ${allValue.password}, checkbox: ${allValue.isActive}`)
    }

    return (
        <div className='loginboxed'>
            <div className="box_heading">
                <h1>Architect</h1>
            </div>
            <div className="box_form">
                <h1>Welcome back,</h1>
                <p>Please sign in to your account below.</p>
                <div className="form_boxed">
                    <input onChange={handleChangeInputOne} value={inputone} type='text' className='box_input' placeholder='Email here...' />
                    <input onChange={handleChangeInputTwo} value={inputtwo} type='text' className='box_input' placeholder='Password here...' />
                    <div className='checkboxlogin'>
                        <input onChange={handleChangeInputThree} value={inputthree} type="checkbox" className='box_input_check' />
                        <p>Keep me logged in</p>
                    </div>
                </div>
                <div className='box_register'>
                    <p >No account?<a href='/register'>Sign up now</a></p>
                </div>
                <div className='box_recover'>
                    <a href='/forgotpassword'>Recover Password</a>
                    <button onClick={handleSubmit} type='button' >Login to Dashboard</button>
                </div>
            </div>
            <div className="box_copy">
                <p>Copyright © ArchitectUI 2019</p>
            </div>
        </div>
    )
}

export default LoginBox;
