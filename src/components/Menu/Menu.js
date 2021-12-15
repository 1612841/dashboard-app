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
        <nav className='menu position-fixed navbar-mail'>
            <div className="scrollbar-sidebar w-280 h-100vh d-flex justify-content-center">
                <ul className="app-sidebar px-24 py-12 w-100% h-100%">
                    <li className='w-100%'>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>MENU</h1>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative' onClick={() => setArrowChange({...arrowChange, arrowone: !(arrowChange.arrowone),
                                arrowtwo: false,
                                arrowthree: false,
                                arrowfour: false,
                                arrowfive: false,
                                arrowsix: false,
                                arrowseven: false,
                                arroweight: false,
                                arrownine: false,})}>
                                
                                <span className='fas fa-rocket d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' />Dashboards<span className='fas fa-chevron-right font-size-12 d-flex align-items-center position-absolute r-10' />
                            </li>
                            <li>
                                <ul className={arrowChange.arrowone?'ul-contain my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                                    {analytics.map((item, index) => 
                                        <li className='item-link position-relative l-40 px-16 py-6 w-70% d-flex align-items-center font-size-14 line-height-24' key={item}>{item}</li>
                                        )}
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative' onClick={() => setArrowChange({...arrowChange, arrowtwo: !(arrowChange.arrowtwo),  
                                arrowone: false,
                                arrowthree: false,
                                arrowfour: false,
                                arrowfive: false,
                                arrowsix: false,
                                arrowseven: false,
                                arroweight: false,
                                arrownine: false,})}>
                                
                                <span className='far fa-sticky-note d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' />Pages<span className={`fas fa-chevron-right font-size-12 d-flex align-items-center position-absolute r-10`} />
                            </li>
                            <li>
                                <ul className={arrowChange.arrowtwo?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                                    {pages.map((item, index) => 
                                        <Link className="link-item item-link position-relative l-40 px-16 py-6 w-70% d-flex align-items-center font-size-14 line-height-24" to={item[1]} key={index}>{item[0]}</Link>
                                        )}
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative' onClick={() => setArrowChange({...arrowChange, arrowthree: !(arrowChange.arrowthree), 
                                arrowone: false,
                                arrowtwo: false,
                                arrowfour: false,
                                arrowfive: false,
                                arrowsix: false,
                                arrowseven: false,
                                arroweight: false,
                                arrownine: false,})}>
                                
                                <span className='fas fa-mobile-alt d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' /> Application  <span className='fas fa-chevron-right font-size-12 d-flex align-items-center position-absolute r-10' />
                            </li>
                            <li>    
                                <ul className={arrowChange.arrowthree?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                                    {application.map((item, index) => 
                                        <Link className="link-item item-link position-relative l-40 px-16 py-6 w-70% d-flex align-items-center font-size-14 line-height-24" to={item[1]} key={index}>{item[0]}</Link>
                                        )}
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>UI COMPONENTS</h1>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative' onClick={() => setArrowChange({...arrowChange, arrowfour: !(arrowChange.arrowfour), 
                                arrowone: false,
                                arrowtwo: false,
                                arrowthree: false,
                                arrowfive: false,
                                arrowsix: false,
                                arrowseven: false,
                                arroweight: false,
                                arrownine: false,})}>
                                
                                <span className='far fa-gem d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' />Elements<span className='fas fa-chevron-right font-size-12 d-flex align-items-center position-absolute r-10'  />
                            </li>
                            <li>    
                                <ul className={arrowChange.arrowfour?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                                    {analytics.map((item, index) => 
                                        <li className='item-link position-relative l-40 px-16 py-6 w-70% d-flex align-items-center font-size-14 line-height-24' key={item}>{item}</li>
                                        )}
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative' onClick={() => setArrowChange({...arrowChange, arrowfive: !(arrowChange.arrowfive),  
                                arrowone: false,
                                arrowtwo: false,
                                arrowthree: false,
                                arrowfour: false,
                                arrowsix: false,
                                arrowseven: false,
                                arroweight: false,
                                arrownine: false,})}>
                                
                                <span className='fas fa-car d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' />Components<span className={`fas fa-chevron-right font-size-12 d-flex align-items-center position-absolute r-10`} />
                            </li>
                            <li>    
                                <ul className={arrowChange.arrowfive?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                                    {analytics.map((item, index) => 
                                        <li className='item-link position-relative l-40 px-16 py-6 w-70% d-flex align-items-center font-size-14 line-height-24' key={index}>{item}</li>
                                        )}
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative' onClick={() => setArrowChange({...arrowChange, arrowsix: !(arrowChange.arrowsix),  
                                arrowone: false,
                                arrowtwo: false,
                                arrowthree: false,
                                arrowfour: false,
                                arrowfive: false,
                                arrowseven: false,
                                arroweight: false,
                                arrownine: false,})}>
                                
                                <span className='fas fa-border-none d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' />Tables<span className='fas fa-chevron-right font-size-12 d-flex align-items-center position-absolute r-10' />
                            </li>
                            <li>    
                                <ul className={arrowChange.arrowsix?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                                    {application.map((item, index) => 
                                        <li className='item-link position-relative l-40 px-16 py-6 w-70% d-flex align-items-center font-size-14 line-height-24' key={index}>{item[0]}</li>
                                        )}
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>DASHBOARDS WIDGETS</h1>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8'><span className='fas fa-chart-pie d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' /> Chart Boxes 1 </li>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative'> <span className='fas fa-map-signs d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' /> Chart Boxes 2 </li>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative'><span className='fas fa-globe d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' /> Chart Boxes 3</li>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative'><span className='far fa-calendar-alt d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' /> Profile Boxes</li>
                        </ul>
                    </li>

                    <li>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>FORMS</h1>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative' onClick={() => setArrowChange({...arrowChange, arrowseven: !(arrowChange.arrowseven),  
                                arrowone: false,
                                arrowtwo: false,
                                arrowthree: false,
                                arrowfour: false,
                                arrowfive: false,
                                arrowsix: false,
                                arroweight: false,
                                arrownine: false,})}>
                                
                                <span className='far fa-lightbulb d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' /> Elements <span className='fas fa-chevron-right font-size-12 d-flex align-items-center position-absolute r-10' />
                            </li>
                            <li>
                                <ul className={arrowChange.arrowseven?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                                    {elements.map((item, index) => 
                                        <li className='item-link position-relative l-40 px-16 py-6 w-70% d-flex align-items-center font-size-14 line-height-24' key={index}>{item}</li>
                                        )}
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='heading-contain cursor border-radius-4 d-flex font-size-14 font-weight-bold align-items-center opacity-7 line-height-24 p-8 position-relative' onClick={() => setArrowChange({...arrowChange, arroweight: !(arrowChange.arroweight),  
                                arrowone: false,
                                arrowtwo: false,
                                arrowthree: false,
                                arrowfour: false,
                                arrowfive: false,
                                arrowsix: false,
                                arrowseven: false,
                                arrownine: false,})}>
                                
                                <span className='fas fa-gamepad d-flex font-size-14 px-8 w-20 align-items-center justify-content-center' /> Widgets  <span className='fas fa-chevron-right font-size-12 d-flex align-items-center position-absolute r-10' />
                            </li>
                            <li>
                                <ul className={arrowChange.arroweight?'ul-contain h-auto w-100% my-15 max-h-100% visibility-visible opacity-10' : 'ul-contain-none max-h-0 visibility-hidden opacity-0'}>
                                    {widgets.map((item, index) => 
                                        <li className='item-link position-relative l-40 px-16 py-6 w-70% d-flex align-items-center font-size-14 line-height-24' key={index}>{item}</li>
                                        )}
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h1 className='font-size-13 py-12 color-rgb-blue font-weight-bold'>CHARTS</h1>
                        <ul>
                            <li className='heading-contain d-flex border-radius-4 h-38 font-size-14 font-weight-bold align-items-center align-content-center opacity-7 cursor position-relative'><span className='far fa-image d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> ChartJS </li>
                            <li className='heading-contain d-flex border-radius-4 h-38 font-size-14 font-weight-bold align-items-center align-content-center opacity-7 cursor position-relative'><span className='fas fa-chart-pie d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Apex Charts  </li>
                            <li className='heading-contain d-flex border-radius-4 h-38 font-size-14 font-weight-bold align-items-center align-content-center opacity-7 cursor position-relative'><span className='fas fa-chart-line d-flex w-34 h-34 px-11 align-content-center align-items-center justify-content-center' /> Chart Sparklines  </li>
                        </ul>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}

export default Menu;
