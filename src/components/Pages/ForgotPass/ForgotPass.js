import React, { useState, useEffect } from 'react';
import './ForgotPass.scss';

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

function ForgotPass() {
    
    const [current, setCurrent] = useState(0);
    const [inputs, setInputs] = useState({
        inputEmail: '',
        inputPassword: '',
        isActive: false
    });
    const [classes, setClasses] = useState(current)

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

    return (
        <div className='d-flex'>
            <div className="col-md-4 slide-show order-first h-100vh">
                <div className='slide w-100% h-99% overflow-hidden d-flex border-radius-4'>
                    <button type='button' className='btn d-flex position-absolute mt-24% l-15 w-40 h-40 border-radius-50% bg-transparent align-items-center justify-content-center align-content-center hover' onClick={preSlide}><i class="fas fa-chevron-left font-size-20"></i></button>
                    <button type='button' className='btn d-flex position-absolute mt-24% l-575 w-40 h-40 border-radius-50% bg-transparent align-items-center justify-content-center align-content-center hover'  onClick={nextSlide}><i class="fas fa-chevron-right font-size-20"></i></button>
                    {dataSlide.map((item, index) => 
                        <div key={index} className={index === current? `${item.class} d-flex align-items-center justify-content-center align-content-center` : 'slide-none' }>
                            <div className={index === classes?'d-block w-70% opacity-10' : 'opacity-0'}>
                                <h4 className='w-100% d-flex justify-content-center align-items-center font-size-28 mb-24 color-light font-weight-normal'>{item.heading}</h4>
                                <p className='w-100% text-align-center font-size-16 opacity-7 mb-16 color-light'>{item.passage}</p>
                            </div>
                        </div>
                    )}
                    <div className='d-flex position-absolute b-15 w-32% mx-auto my-auto align-items-center justify-content-center'>
                        {
                            dataSlide.map((item, index) => <button className={'dots bg-light h-10 w-10 border border-radius-50% border cursor mx-8'} type='button' onClick={() => setCurrent(index)}></button>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8 form-login d-flex justify-content-center h-100vh">
                <div className='w-50%'>
                    <img className='mb-48' src='/images/logoA.png' alt='logo' />
                    <h4 className='mb-8'>
                        <span className='font-size-24 font-weight-lighter d-flex flex-1-0-100% mb-8 opacity-6'>Forgot your Password?</span>
                        <span className='font-size-18 font-weight-lighter d-flex flex-1-0-100% mb-24'>Use the form below to recover it.</span>
                    </h4>
                    <div className='row d-flex w-100%'>
                        <div className="col-6 d-block">
                            <h5 className='font-size-14 font-weight-100 h-38 w-100% mb-8'>Email</h5>
                            <input value={inputs.inputEmail} className='w-100% py-10 mb-8 mit-10 border border-radius-4 font-size-14 line-height-1 pl-16' type='text' placeholder='Email here...' onChange={(e)=> setInputs({...inputs, inputEmail:e.target.value})} />
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-space-between mt-24 mir-3%'>
                        <a className='font-size-16 cursor py-8 text-decoration-none color-rgb-blue font-weight-bold' href='/forgotpassword'>Sign in existing account</a>
                        <button className='btn cursor font-size-13 py-8 px-16 color-light bg-rgb-blue font-weight-bold border-radius-5' onClick={handleSubmit}>Login to Dashboard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass;
