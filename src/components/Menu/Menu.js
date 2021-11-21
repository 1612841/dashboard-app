import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';


const analytics = [
    'Analytics',
    'Commerce',
    'Sales',
    'Minimal',
    'CRM',
    'Pages',
    'Applications'
];

function Menu() {

    const [arrowChange, setArrowChange] = useState({
        arrowone: false,
        arrowtwo: false,
        arrowthree: false,
        arrowfour: false,
        arrowfive: false,
        arrowsix: false,
        arrowseven: false,
        arroweight: false,
        arrownine: false,
    });

    const [preArrowChange, setPreArrowChange] = useState({
        arrowone: false,
        arrowtwo: false,
        arrowthree: false,
        arrowfour: false,
        arrowfive: false,
        arrowsix: false,
        arrowseven: false,
        arroweight: false,
        arrownine: false,
    })

    const pages = [
        [
         'Login',
         '/login'
        ],
        [
         'Login Boxed',
         '/loginboxed'
        ],
        [
         'Register',
         '/register'
        ],
        [
         'Register Boxed',
         '/registerboxed'
        ],
        [
         'Forgot Password Boxed',
         '/forgotpassword'
        ],
    ];

    const application = [
        ['Mailbox', '/mailbox'],
        ['Chat', '/chat'],
        ['FAQ Section', '/faqsection'],
        ['Forums', '/forums']
    ];

    const elements = [
        'Controls',
        'Layouts',
        'Validation',
        'Wizard'
    ];
    
    const widgets = [
        'Datepicker',
        'Range Slider',
        'Input Selects',
        'Toggle Switch',
        'WYSIWYG Editor',
        'Input Mask',
        'Clipboard',
        'Textarea Autosize'
    ];

    return (
        <nav className='position-fixed navbar-mail'>
            <div className="scrollbar-sidebar w-280 h-100% d-flex justify-content-center">
                <div className="app-sidebar mx-24 py-12 w-100% h-100%">
                    <div className='w-100%'>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>MENU</h1>
                        <h2 className='heading-contain cursor border-radius-4 d-flex h-38 font-size-14 align-items-center align-content-center opacity-7' onClick={() => setArrowChange({...arrowChange, arrowone: !(arrowChange.arrowone),
                            arrowtwo: false,
                            arrowthree: false,
                            arrowfour: false,
                            arrowfive: false,
                            arrowsix: false,
                            arrowseven: false,
                            arroweight: false,
                            arrownine: false,})}>
                            
                            <span className='fas fa-rocket d-flex w-34 h-34 px-20 align-content-center align-items-center justify-content-center' />Dashboards<span className='fas fa-chevron-right w-34 h-34 d-flex align-items-center ml-35% mr-3' /></h2>
                        <ul className={arrowChange.arrowone?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                            {analytics.map((item, index) => 
                                <li className='item-link position-relative l-45 h-32 w-63% d-flex align-items-center px-24 font-size-14 py-0 mil-8' key={item}>{item}</li>
                                )}
                        </ul>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor' onClick={() => setArrowChange({...arrowChange, arrowtwo: !(arrowChange.arrowtwo),  
                            arrowone: false,
                            arrowthree: false,
                            arrowfour: false,
                            arrowfive: false,
                            arrowsix: false,
                            arrowseven: false,
                            arroweight: false,
                            arrownine: false,})}>
                            
                            <span className='far fa-sticky-note d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' />Pages<span className={`fas fa-chevron-right position-relative l-120 w-34 h-34 d-flex align-items-center align-content-center`} /></h2>
                        <ul className={arrowChange.arrowtwo?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                            {pages.map((item, index) => 
                                <Link className="link-item item-link position-relative l-45 h-32 w-73% d-flex align-items-center pl-24 font-size-14 py-0 mil-8" to={item[1]} key={index}>{item[0]}</Link>
                                )}
                        </ul>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor' onClick={() => setArrowChange({...arrowChange, arrowthree: !(arrowChange.arrowthree), 
                            arrowone: false,
                            arrowtwo: false,
                            arrowfour: false,
                            arrowfive: false,
                            arrowsix: false,
                            arrowseven: false,
                            arroweight: false,
                            arrownine: false,})}>
                            
                            <span className='fas fa-mobile-alt d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Application  <span className='fas fa-chevron-right position-relative l-85 w-34 h-34 d-flex align-items-center align-content-center' /></h2>
                        <ul className={arrowChange.arrowthree?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                            {application.map((item, index) => 
                                <Link className="link-item item-link position-relative l-45 h-32 w-73% d-flex align-items-center pl-24 font-size-14 py-0 mil-8" to={item[1]} key={index}>{item[0]}</Link>
                                )}
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>UI COMPONENTS</h1>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor' onClick={() => setArrowChange({...arrowChange, arrowfour: !(arrowChange.arrowfour), 
                            arrowone: false,
                            arrowtwo: false,
                            arrowthree: false,
                            arrowfive: false,
                            arrowsix: false,
                            arrowseven: false,
                            arroweight: false,
                            arrownine: false,})}>
                            
                            <span className='far fa-gem d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' />Elements<span className='fas fa-chevron-right position-relative l-98 w-34 h-34 d-flex align-items-center align-content-center'  /></h2>
                        <ul className={arrowChange.arrowfour?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                            {analytics.map((item, index) => 
                                <li className='item-link position-relative l-45 h-32 w-63% d-flex align-items-center px-24 font-size-14 py-0 mil-8' key={item}>{item}</li>
                                )}
                        </ul>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor' onClick={() => setArrowChange({...arrowChange, arrowfive: !(arrowChange.arrowfive),  
                            arrowone: false,
                            arrowtwo: false,
                            arrowthree: false,
                            arrowfour: false,
                            arrowsix: false,
                            arrowseven: false,
                            arroweight: false,
                            arrownine: false,})}>
                            
                            <span className='fas fa-car d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Components  <span className={`fas fa-chevron-right position-relative l-75 w-34 h-34 d-flex align-items-center align-content-center`} /></h2>
                        <ul className={arrowChange.arrowfive?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                            {analytics.map((item, index) => 
                                <li className='item-link position-relative l-45 h-32 w-63% d-flex align-items-center px-24 font-size-14 py-0 mil-8' key={index}>{item}</li>
                                )}
                        </ul>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor' onClick={() => setArrowChange({...arrowChange, arrowsix: !(arrowChange.arrowsix),  
                            arrowone: false,
                            arrowtwo: false,
                            arrowthree: false,
                            arrowfour: false,
                            arrowfive: false,
                            arrowseven: false,
                            arroweight: false,
                            arrownine: false,})}>
                            
                            <span className='fas fa-border-none d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Tables  <span className='fas fa-chevron-right position-relative l-117 w-34 h-34 d-flex align-items-center align-content-center' /></h2>
                        <ul className={arrowChange.arrowsix?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                            {application.map((item, index) => 
                                <li className='item-link position-relative l-45 h-32 w-63% d-flex align-items-center px-24 font-size-14 py-0 mil-8' key={index}>{item[0]}</li>
                                )}
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>DASHBOARDS WIDGETS</h1>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor'><span className='fas fa-chart-pie d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Chart Boxes 1 </h2>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor'> <span className='fas fa-map-signs d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Chart Boxes 2 </h2>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor'><span className='fas fa-globe d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Chart Boxes 3</h2>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor'><span className='far fa-calendar-alt d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Profile Boxes</h2>
                    </div>

                    <div>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>FORMS</h1>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor' onClick={() => setArrowChange({...arrowChange, arrowseven: !(arrowChange.arrowseven),  
                            arrowone: false,
                            arrowtwo: false,
                            arrowthree: false,
                            arrowfour: false,
                            arrowfive: false,
                            arrowsix: false,
                            arroweight: false,
                            arrownine: false,})}>
                            
                            <span className='far fa-lightbulb d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Elements <span className='fas fa-chevron-right position-relative l-99 w-34 h-34 d-flex align-items-center align-content-center' /></h2>
                        <ul className={arrowChange.arrowseven?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                            {elements.map((item, index) => 
                                <li className='item-link position-relative l-45 h-32 w-63% d-flex align-items-center px-24 font-size-14 py-0 mil-8' key={index}>{item}</li>
                                )}
                        </ul>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor' onClick={() => setArrowChange({...arrowChange, arroweight: !(arrowChange.arroweight),  
                            arrowone: false,
                            arrowtwo: false,
                            arrowthree: false,
                            arrowfour: false,
                            arrowfive: false,
                            arrowsix: false,
                            arrowseven: false,
                            arrownine: false,})}>
                            
                            <span className='fas fa-gamepad d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Widgets  <span className='fas fa-chevron-right position-relative l-107 w-34 h-34 d-flex align-items-center align-content-center' /></h2>
                        <ul className={arrowChange.arroweight?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                            {widgets.map((item, index) => 
                                <li className='item-link position-relative l-45 h-32 w-63% d-flex align-items-center px-24 font-size-14 py-0 mil-8' key={index}>{item}</li>
                                )}
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>CHARTS</h1>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor'><span className='far fa-image d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> ChartJS </h2>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor'><span className='fas fa-chart-pie d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Apex Charts  </h2>
                        <h2 className='heading-contain d-flex border-radius-4 h-38 font-size-14 align-items-center align-content-center opacity-7 cursor'><span className='fas fa-chart-line d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Chart Sparklines  </h2>
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Menu;
