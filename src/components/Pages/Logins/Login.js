import React, { useState, useEffect } from 'react';
import './Login.scss';
import Validation from '../../../Validation/Validation';

const dataSlide = [
    {
        class: 'content-slide1',
        classout: '.slide-none1',
        heading: "Perfect Balance",
        passage: "ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.",
    },
    {
        class: 'content-slide2',
        classout: '.slide-none2',
        heading: "Scalable, Modular, Consistent",
        passage: "Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components",
    },
    {
        class: 'content-slide3',
        classout: '.slide-none3',
        heading: "Complex, but lightweight",
        passage: "We've included a lot of components that cover almost all use cases for any type of application.",
    },
];

function Login() {

    const {handleBlur, Validate} = Validation();

    const [current, setCurrent] = useState(0);
    const [inputs, setInputs] = useState({
        inputEmail: '',
        inputPassword: '',
        isActive: false
    });
    const [classes, setClasses] = useState(current);
    
    const [disableButton, setDisableButton] = useState(false)

    const nextSlide = () => {
        setCurrent(current === (dataSlide.length - 1)? 0 : (current + 1));
    };
    const preSlide = () => {
        setCurrent(current === 0? (dataSlide.length - 1) : (current -1));
    };

    const handleSubmit = () => {
        alert(`Kết quả gồm: email: ${inputs.inputEmail}, password: ${inputs.inputPassword}, checkbox: ${inputs.isActive}`)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
          setClasses(current)
        }, 600);
        return () => clearTimeout(timer);
      }, [current]);

    const errors = Validate(inputs.inputEmail, inputs.inputPassword);

    useEffect(() => {
            setDisableButton(false);
        if (errors.inputEmail !== '' || errors.inputPassword !== '') {
            setDisableButton(true);
        }
    }, [errors.inputPassword, errors.inputEmail])

    return (
        <div className='' >
            <div className='row bg-gray-100' >
                <div className="col-lg-4 slide-show order-first h-100vh">
                    <div className='slide overflow-hidden d-flex border-radius-4 position-relative'>
                        <button type='button' className='btn d-flex position-absolute l-15 t-48% p-16 border-radius-50% bg-transparent align-items-center justify-content-center align-content-center hover' onClick={preSlide}><i class="fas fa-chevron-left font-size-20"></i></button>
                        <button type='button' className='btn d-flex position-absolute l-90% t-48% p-16 border-radius-50% bg-transparent align-items-center justify-content-center align-content-center hover'  onClick={nextSlide}><i class="fas fa-chevron-right font-size-20"></i></button>
                        {dataSlide.map((item, index) => 
                            <div key={index} className={index === current? `${item.class} d-flex align-items-center justify-content-center align-content-center` : 'slide-none' }>
                                <div className={index === classes?'d-block w-70% opacity-10' : 'opacity-0'}>
                                    <h4 className='d-flex justify-content-center align-items-center font-size-28 mb-24 color-light font-weight-normal'>{item.heading}</h4>
                                    <p className='text-align-center font-size-16 opacity-7 mb-16 color-light'>{item.passage}</p>
                                </div>
                            </div>
                        )}
                        <div className='d-flex position-absolute b-15 w-32% align-items-center justify-content-center'>
                            {
                                dataSlide.map((item, index) => <button className={'dots bg-light h-10 w-10 border border-radius-50% border cursor mx-8'} type='button' onClick={() => setCurrent(index)}></button>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 h-100vh">
                    <div className='col-sm-6 offsetx-3 h-100vh center'>
                        <div>
                            <img className='mb-48' src='/images/logoA.png' alt='logo' />
                            <h4 className='mb-8'>
                                <span className='font-size-18 font-weight-lighter d-flex flex-1-0-100% mb-8 fz-14'>Welcome back,</span>
                                <span className='font-size-18 font-weight-lighter d-flex flex-1-0-100% mb-24 fz-14'>Please sign in to your account.</span>
                            </h4>
                            <h6 className='d-flex mt-3 font-size-16 font-weight-lighter mb-8 fz-14'>
                                No account?
                                <a className='color-rgb-blue text-decoration-none cursor mx-10' href='/register'>Sign up now</a>
                            </h6>
                            <hr className='w-auto my-16' />
                            <div className='row d-flex w-100% align-items-center justify-content-space-between'>
                                <div className="col-md center">
                                    <h5 className='font-size-14 font-weight-100 py-8'>Email</h5>
                                    <input value={inputs.inputEmail} required='true' onBlur={handleBlur('inputEmail')} valid={errors.inputEmail === ''} invalid={errors.inputEmail !== ""} className='inputs px-12 py-8 mb-10 border border-radius-4 font-size-14 line-height-1 outline-none' type='text' placeholder='Email here...' onChange={(e)=> setInputs({...inputs, inputEmail:e.target.value})} />
                                    <p className='font-size-12 color-red font-weight-normal'>{errors.inputEmail} </p>
                                </div>
                                <div className="col-md center">
                                    <h5 className='font-size-14 font-weight-100 py-8'>Password</h5>
                                    <input value={inputs.inputPassword} onBlur={handleBlur('inputPassword')} valid={errors.inputPassword === ''} invalid={errors.inputPassword !== ""} className='px-12 py-8 mb-10 border border-radius-4 font-size-14 line-height-1 outline-none' type='text' placeholder='Password here...' onChange={(e)=> setInputs({...inputs, inputPassword:e.target.value})} />
                                    <p className='font-size-12 color-red font-weight-normal'>{errors.inputPassword} </p>
                                </div>
                            </div>
                            <hr className='w-auto my-32' />
                            <div className='d-flex align-items-center align-content-center mt-10'>
                                <input checked={inputs.isActive} className='style-check-input ml-5' type='checkbox' id='checkbox-input' onChange={()=> setInputs({...inputs, isActive: !inputs.isActive})}/>
                                <label className='pl-10 font-size-14' for='checkbox-input' >Keep me logged in</label>
                            </div>
                            <div className='d-flex align-items-center align-content-center justify-content-right'>
                                <a className='font-size-13 cursor py-8 px-16 text-decoration-none color-rgb-blue font-weight-bold fz-10 reset' href='/forgotpassword'>Recover Password</a>
                                <button disabled={disableButton} className='btn cursor font-size-13 py-8 px-16 color-light bg-rgb-blue font-weight-bold border-radius-6 fz-10 reset' onClick={handleSubmit}>Login to Dashboard</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
