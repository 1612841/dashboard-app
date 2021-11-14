import React, { useState } from 'react';
import './Registerbox.css';

function Registerbox() {

    const [input, setInput] = useState({
        email: '',
        name: '',
        password: '',
        reppass: '',
        check: false
    });

    const submitall = () => alert(`data gồm email ${input.email}, name ${input.name}, password ${input.password}, reppassword ${input.reppass}, active ${input.check}`)

    return (
        <div className='registerbox'>
            <div className="wrap_regis">
                <div className='wrap_form_pre'>
                    <div className="heading">
                        <h1>Architect</h1>
                    </div>
                    <div className="forms_regis">
                        <div className="headbox">
                            <h1>Welcome Back,</h1>
                            <p>It only takes a <color> few seconds</color> to create your account</p>
                        </div>
                        <div className='formhr'>
                            <hr />
                        </div>
                        <div className='box_input_pre'>
                            <div className='box_input_text' >
                                <input onChange={(e) => setInput({...input, email: e.target.value})} value={input.email} type='text' placeholder='Email here...' />
                                <input onChange={(e) => setInput({...input, name: e.target.value})} value={input.name} type='text' placeholder='Name here...' />
                                <input onChange={(e) => setInput({...input, password: e.target.value})} value={input.password} type='text' placeholder='Password here...' />
                                <input onChange={(e) => setInput({...input, reppass: e.target.value})} value={input.reppass} type='text' placeholder='Repeat password here...' />
                            </div>
                            <div className='boxinput'>
                                <input onChange={() => setInput({...input, check: !input.check})} value={input.check} type='checkbox' />
                                <p>Accept our <a href='/'>Terms and Conditions.</a></p>
                            </div>
                        </div>
                        <div className='formhrsecond'>
                            <hr />
                        </div>
                        <div className="form_signin">
                            <p>Already have an account? <a href='/login'>Sign in</a> | <a href='/'>Recover Password</a></p>
                        </div>
                        <div className='formhrthird'>
                            <hr />
                        </div>
                        <div className="form_btnss">
                            <button onClick={submitall} type='submit' >Create Account</button>
                        </div>
                    </div>
                    <div className='footer'>
                        <p>Copyright © ArchitectUI 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registerbox;
