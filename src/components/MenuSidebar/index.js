import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js'

const analytics = [
    'Analytics',
    'Commerce',
    'Sales',
    'Minimal',
    'CRM',
    'Pages',
    'Applications'
];

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
    'Mailbox',
    'Chat',
    'FAQ Section',
    'Forums'
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
]

function MenuSideBar() {

    const [arrowChange1, setArrowChange1] = useState(false);
    const [arrowChange2, setArrowChange2] = useState(false);
    const [arrowChange3, setArrowChange3] = useState(false);
    const [arrowChange4, setArrowChange4] = useState(false);
    const [arrowChange5, setArrowChange5] = useState(false);
    const [arrowChange6, setArrowChange6] = useState(false);
    const [arrowChange7, setArrowChange7] = useState(false);
    const [arrowChange8, setArrowChange8] = useState(false);

    return (
    <div className="menu">
        <div className='menusidebar'>
            <div className="menumain">
                <h1>MENU</h1>
                <div className="menuitem">
                    <ul className='menuitem_ul' >
                        <h2 onClick={() => setArrowChange1(!arrowChange1)}><span className='fas fa-rocket' /> Dashboards  <span className={`fas fa-chevron-right ${arrowChange1? 'arrowss' : 'arrows'}`} /></h2>
                        { arrowChange1 && 
                        <ul className={arrowChange1? 'menuitem_ul-level2' : 'menuitem_ul-level2_two'}>
                            {analytics.map((item, index) => 
                                <li  key={item}>{item}</li>
                                )}
                        </ul>
                        }
                    </ul>
                </div>
                <div className="menuitem">
                    <ul className='menuitem_ul' onClick={() => setArrowChange2(!arrowChange2)}>
                        <h2><span className='far fa-sticky-note' /> Pages  <span className={`fas fa-chevron-right ${arrowChange2? 'arrowss' : 'arrows'}`} /></h2>
                        <ul className={arrowChange2? 'menuitem_ul-level2' : 'menuitem_ul-level2_two'}>
                            {pages.map((item, index) => 
                                <Link className="itemLink" to={item[1]} key={index}>{item[0]}</Link>
                                )}
                        </ul>
                    </ul>
                </div>
                <div className="menuitem">
                    <ul className='menuitem_ul' onClick={() => setArrowChange3(!arrowChange3)}>
                        <h2><span className='fas fa-mobile-alt' /> Application  <span className={arrowChange3? 'fas fa-chevron-right arrowss' : 'fas fa-chevron-right arrows'} /></h2>
                        <ul className={arrowChange3? 'menuitem_ul-level2' : 'menuitem_ul-level2_two'}>
                            {application.map((item, index) => 
                                <li  key={item}>{item}</li>
                                )}
                        </ul>
                    </ul>
                </div>
            </div>
                <div className="menumain_components">
                    <h1>UI COMPONENTS</h1>
                    <div className="menuitem">
                        <ul className='menuitem_ul'  onClick={() => setArrowChange4(!arrowChange4)}>
                            <h2><span className='far fa-gem' /> Elements  <span className={arrowChange4? 'fas fa-chevron-right arrowss' : 'fas fa-chevron-right arrows'} /></h2>
                            <div className="wrap_ul">
                                <ul className={arrowChange4? 'menuitem_ul-level2' : 'menuitem_ul-level2_two'}>
                                    {analytics.map((item, index) => 
                                        <li  key={item}>{item}</li>
                                        )}
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div className="menuitem">
                        <ul className='menuitem_ul' onClick={() => setArrowChange5(!arrowChange5)}>
                            <h2><span className='fas fa-car' /> Components  <span className={`fas fa-chevron-right ${arrowChange5? 'arrowss' : 'arrows'}`} /></h2>
                            <ul className={arrowChange5? 'menuitem_ul-level2' : 'menuitem_ul-level2_two'}>
                                {analytics.map((item, index) => 
                                    <li  key={item}>{item}</li>
                                    )}
                            </ul>
                        </ul>
                    </div>
                    <div className="menuitem">
                        <ul className='menuitem_ul' onClick={() => setArrowChange6(!arrowChange6)}>
                            <h2><span className='fas fa-border-none' /> Tables  <span className={arrowChange6? 'fas fa-chevron-right arrowss' : 'fas fa-chevron-right arrows'} /></h2>
                            <ul className={arrowChange6? 'menuitem_ul-level2' : 'menuitem_ul-level2_two'}>
                                {application.map((item, index) => 
                                    <li  key={item}>{item}</li>
                                    )}
                            </ul>
                        </ul>
                    </div>
                </div>
            
                <div className="menumain_widgets">
                    <h1>DASHBOARDS WIDGETS</h1>
                    <div className="menuitem">
                        <ul className='menuitem_ul' >
                            <h2><span className='fas fa-chart-pie' /> Chart Boxes 1 </h2>
                        </ul>
                    </div>
                    <div className="menuitem">
                        <ul className='menuitem_ul' >
                            <h2> <span className='fas fa-map-signs' /> Chart Boxes 2 </h2>
                        </ul>
                    </div>
                    <div className="menuitem">
                        <ul className='menuitem_ul' >
                            <h2><span className='fas fa-globe' /> Chart Boxes 3</h2>
                        </ul>
                    </div>
                    <div className="menuitem">
                        <ul className='menuitem_ul' >
                            <h2><span className='far fa-calendar-alt' /> Profile Boxes</h2>
                        </ul>
                    </div>
                </div>

                <div className="menumain_forms">
                    <h1>FORMS</h1>
                    <div className="menuitem">
                        <ul className='menuitem_ul'  onClick={() => setArrowChange7(!arrowChange7)}>
                            <h2><span className='far fa-lightbulb' /> Elements <span className={arrowChange1? 'fas fa-chevron-right arrowss' : 'fas fa-chevron-right arrows'} /></h2>
                            <ul className={arrowChange7? 'menuitem_ul-level2' : 'menuitem_ul-level2_two'}>
                                {elements.map((item, index) => 
                                    <li key={item}>{item}</li>
                                    )}
                            </ul>
                        </ul>
                    </div>
                    <div className="menuitem">
                        <ul className='menuitem_ul' onClick={() => setArrowChange8(!arrowChange8)}>
                            <h2><span className='fas fa-gamepad' /> Widgets  <span className={arrowChange1? 'fas fa-chevron-right arrowss' : 'fas fa-chevron-right arrows'} /></h2>
                            <ul className={arrowChange8? 'menuitem_ul-level2' : 'menuitem_ul-level2_two'}>
                                {widgets.map((item, index) => 
                                    <li  key={item}>{item}</li>
                                    )}
                            </ul>
                        </ul>
                    </div>
                </div>

                <div className="menumain_charts">
                    <h1>CHARTS</h1>
                    <div className="menuitem">
                        <ul className='menuitem_ul'  >
                            <h2><span className='far fa-image' /> ChartJS </h2>
                        </ul>
                    </div>
                    <div className="menuitem">
                        <ul className='menuitem_ul' >
                            <h2><span className='fas fa-chart-pie' /> Apex Charts  </h2>
                        </ul>
                    </div>
                    <div className="menuitem">
                        <ul className='menuitem_ul' >
                            <h2><span className='fas fa-chart-line' /> Chart Sparklines  </h2>
                        </ul>
                    </div>
                </div>
        </div> 
    </div>
    )
}

export default MenuSideBar;
