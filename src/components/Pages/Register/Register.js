import React, { useState } from 'react';
import './Register.css';

function Register() {

    const [input, setInput] = useState({
        email: '',
        name: '',
        password: '',
        repeatpass: '',
        check: false
    })

    const submitform = () => alert(`data gồm email ${input.email} name ${input.name} pass ${input.password} repeat ${input.password} check ${input.check}`)

    return (
        <div className='register'>
            <div className="register_form">
                <div className='wrap'>
                    <div className="register_logo">
                        <h1>Architect</h1>
                    </div>
                    <div className="register_inform">
                        <h1>Welcome,</h1>
                        <p>It only takes a few seconds to create your account</p>
                    </div>
                    <div className="register_formone">
                        <div className='reg_input'>
                            <label for='inputone'>Email</label>
                            <input onChange={(e) => {setInput({...input, email: e.target.value})}} value={input.email} type='text' className='inputone' id='inputone' placeholder='Email here ...' />
                        </div>
                        <div className='reg_input'>
                            <label for='inputtwo'>Name</label>
                            <input onChange={(e) => {setInput({...input, name: e.target.value})}} value={input.name} type='text' className='inputone' id='inputtwo' placeholder='Name here ...' />
                        </div>
                    </div>
                    <div className="register_formtwo">
                        <div className='reg_inputtwo'>
                            <label for='inputthree'>Password</label>
                            <input onChange={(e) => {setInput({...input, password: e.target.value})}} value={input.password} type='text' className='inputthree' id='inputthree' placeholder='Password here ...' />
                        </div>
                        <div className='reg_inputtwo'>
                            <label for='inputfour'>Repeat Password</label>
                            <input onChange={(e) => {setInput({...input, repeatpass: e.target.value})}} value={input.repeatpass} type='text' className='inputthree' id='inputfour' placeholder='Repeat password here ...' />
                        </div>
                    </div>
                    <div className="register_check">
                        <input onChange={(e) => {setInput({...input, check: !input.check})}} value={input.check} type='checkbox'  />
                        <p>Accept our<a href='/'>Terms and Conditions</a>.</p>
                    </div>
                    <div className="register_submit">
                        <p>Already have an account? <a href='/login'>Sign in</a></p>
                        <button onClick={submitform} type='submit'>Create Account</button>
                    </div>
                </div>
            </div>
            <div className="register_addition">
                <div className='form-wrap'>
                    <h1>Scalable, Modular, Consistent</h1>
                    <p>Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components</p>
                </div>
            </div>
        </div>
    )
}

export default Register;
