import React, {useState} from 'react';
import './Forgot.css';

const dataSlide = [
    {
        class: 'section-info',
        heading: "Perfect Balance",
        passage: "ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.",
        key: 0
    },
    {
        class: 'section-infos',
        heading: "Scalable, Modular, Consistent",
        passage: "Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components",
        key: 1
    },
    {
        class: 'section-infoss',
        heading: "Complex, but lightweight",
        passage: "We've included a lot of components that cover almost all use cases for any type of application.",
        key: 2
    },
]

function Forgot() {

    const [current, setCurrent] = useState(0);
    const [inputone, setInputone] = useState('');
    const [inputtwo, setInputtwo] = useState('');
    const [inputthree, setInputthree] = useState(false);
    const [allValue, setAllValue] = useState({
        email: '',
        password: '',
        isActive: false
    })

    const nextSlide = () => {
        setCurrent(current === (dataSlide.length - 1)? 0 : (current + 1));
    };
    const preSlide = () => {
        setCurrent(current === 0? (dataSlide.length - 1) : (current -1));
    };

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
        <div className='forgot'>
            <div className="information">
                <section className='section'>
                    <button type='button' className='button_font' onClick={preSlide}><i class="fas fa-chevron-left"></i></button>
                    <button type='button' className='button_fonts'  onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    <div className='sections'>
                        {dataSlide.map((item) => 
                                item.key === current &&  
                                    <div style={{borderRadius: '30px'}} key={item.key} className={item.key !== current? 'active' : item.class }>
                                        <h4>{item.heading}</h4>
                                        <p>{item.passage}</p>
                                    </div>
                        )}
                        <div className='dotslide'>
                            {
                                dataSlide.map((item, index) => <button type='button' onClick={() => setCurrent(index)} className={index === current? ' activetwo' : 'circle_slide' }><p>.</p></button>)
                            }
                        </div>
                    </div>
                </section>
            </div>
            <div className='forgottwo'>
                <div className="forgotform">
                    <div className="wrapforgot">
                        <div className="formheadingforgot">
                            <h1>Architect</h1>
                            <p>Forgot your Password?</p>
                            <p className='forgottenp'>Use the form below to recover it.</p>
                        </div>
                        <div className="formsubmit">
                            <div className="form">
                                <label for='email'>Email</label>
                                <input type='text' onChange={handleChangeInputOne} className='inputform' id='email' placeholder='Email here...' value={inputone}></input>
                            </div>
                        </div>
                        <div className='submit'>
                            <a href='/login'>Sign in existing account</a>
                            <button onClick={handleSubmit} type='submit'>Recover Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgot;
