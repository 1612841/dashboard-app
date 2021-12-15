import React, {useState, useEffect, useRef} from 'react';
import './Mail.scss';
import FormCreate from '../FormCreate/FormCreate';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../../../redux/action/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Mail() {

    const dispatch = useDispatch();

    const [current, setCurrent] = useState(0);
    const [check, setCheck] = useState(false);
    const [openTabMenu, setOpenTabMenu] = useState(true);
    const [items, setItems] = useState([]);
    const [displayForm, setDisplayForm] = useState(true);
    const [showFormEdit, setShowFormEdit] = useState('');
    const [index, setIndex] = useState();
    const [ID, setID] = useState('')

    let mailData = useSelector(state => state.infoReducer.info);
    let maillistData = mailData;

    //Refresh lost data
    useEffect(() => {
        if (!mailData[0]) {
            setItems(mailData)
        } else {
            maillistData = items
        }
    }, [mailData[0]])

    let pagenumber = 0;

    if (maillistData.length%5 === 0 ) {
        pagenumber = maillistData.length/5
   }
   else {
        pagenumber = Math.floor(maillistData.length/5 ) + 1;
   };

    const nextSlide = () => {
        setCurrent(current === (pagenumber - 1)? 0 : (current + 1));
        setCheck(false)
    };
    const preSlide = () => {
        setCurrent(current === 0? (pagenumber - 1) : (current -1));
        setCheck(false)
    };

    const listOnline = [
        {
            image: '/images/one.jpg',
            color: 'green'
        },
        {
            image:  '/images/two.jpg',
            color: 'green'
        },
        {
            image:  '/images/three.jpg',
            color: 'green'
        },
        {
            image:  '/images/four.jpg',
            color: 'green'
        },
        {
             image:  '/images/five.jpg',
             color: 'green'
        },
        {
            image:  '/images/six.jpg',
            class: 'mailboxrowtwo',
            color: 'green'
        },
        {
             image: '/images/seven.jpg',
             class: 'mailboxrowtwo',
             color: 'green'
        },
        {
            image:  '/images/eight.jpg',
            class: 'mailboxrowtwo',
            color: 'green'
        },
        {
              image: '/images/nine.jpg',
              class: 'mailboxrowtwo',
              color: 'green'
        },
    //     {
    //         image: '/images/ten.jpg',
    //         class: 'mailboxrowtwo',
    //         color: 'green'
    //    }

    ];

    let onlineImageRandom = [];
    onlineImageRandom = listOnline.sort(() => 0.5 - Math.random()).slice(0,5);

    let remaining = listOnline;
    onlineImageRandom.map((e) => {
        let remain = remaining.filter(item => item.image !== e.image);
         remaining = remain;
         return remaining
    });


    let onlineList = []
    if (remaining.length > 5) {
         onlineList = remaining.sort(() => 0.5 - Math.random()).slice(0,5);
    }
    else {
         onlineList = remaining
    };

    const tagImportant = [
        {
            name:'Important',
            color: 'green'
        },
        {
            name:'favourites',
            color: 'pink'
        },
        {
            name:'Actions',
            color: 'blue'
        },
    ];

    let dataMailbox = maillistData.slice(current*5,(current + 1)*5);

    let buttonPage = [];
    for (let i = 0; i < pagenumber; i= i+1 ) {
        buttonPage.push(i)
    };

    const handleClickOutside = () => {setOpenTabMenu(!openTabMenu); setShowFormEdit(''); setDisplayForm(true)};

    useEffect(() => {
        if (openTabMenu === false) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    })

    const handleDelete = e => {
        console.log(e)
        try {
            const delinfo = deleteData(e);
            dispatch(delinfo); 
        } catch (err) {
            console.log(err)
        }
    };
///////////////
    const [a, setA] = useState(false) 

    useEffect(() => {
        const ids = localStorage.getItem("note");
    
        if (ids === "aaa") {
            localStorage.clear();
            const link = document.getElementById('notify');
            link.click();
            setTimeout(() => {
                setA(false)
            }, 3000);
        }
    }, [ID])

    return (
        <div className='mailbox' id="mailbox">
            <div id="notify"  onClick={() => setA(!a)} className={`${a === true? 'w-200 opacity-10 visibility-visible' : ''} df-aic-jcc bg-black color-light position-absolute t-10 r-5 border-radius-10 w-0 h-50 opacity-0 visibility-hidden font-size-14 tr-all-ease-in-out-8`} >Delete Successfully!</div>
            <div className="d-flex justify-content-space-between align-items-center h-110 ml-280 bg-blue-white px-25" >
                <div className='d-flex justify-content-left'>
                    <button className='w-62 h-62 mr-30 border-radius-6 border-none p-14 color-pink font-weight-10 font-size-22 bg-light'><i class="fas fa-power-off "></i></button>
                    <div className='title-mail align-items-center d-block align-self-center'>
                        <h1 className='font-size-20 font-weight-normal mb-5'>Mailbox</h1>
                        <p className='font-size-14 font-weight-normal mt-5'>Create stunning UIs for your pages with these layout components.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className='btn py-8 px-13 bg-dark mr-20' type='button' ><i className="fas fa-star font-size-14 color-light"></i></button>
                    <button className='btn color-light py-8 w-110 bg-cyan font-weight-bold' type='button' ><i className="fas fa-toolbox pr-20"></i>Button</button>
                </div>
            </div>
            <div className='main-mail h-867 ml-280 d-flex w-auto'>
                <div className="main-left w-270 h-866 bg-gray-100">
                    <button className='btn border w-236 h-33 font-weight-bold color-light bg-color-rgb-blue border-radius-30 mt-25 mb-15 mx-17 cursor font-size-12'>Write New Email</button>
                    <h1 className='h-33 font-size-12 mx-17 mt-11 '>MY ACCOUNT</h1>
                    <div className='d-flex align-item-center justify-content-space-between mx-12'>
                        <div className='d-flex align-items-center justify-content-center p-8 line-height-24'>
                            <i class="far fa-comment-alt font-size-16 mr-10"></i>
                            <p className='font-size-14 color-rgb-blue'>Inbox</p>
                        </div>
                        <div className='df-aic-jcc'>
                            <p className='bg-cyan font-size-12 color-light font-weight-bold py-4 px-8 border-radius-50%'>8</p>
                        </div>
                    </div>
                    <div className='d-flex align-item-center align-content-center justify-content-space-between mx-17 h-37'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <i class="fas fa-file-import font-size-16 mr-10"></i>
                            <p className='font-size-14 color-rgb-blue'>Sent Items</p>
                        </div>
                        <span></span>
                    </div>
                    <div className='d-flex align-item-center align-content-center justify-content-space-between mx-17 h-37'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <i class="fas fa-cog font-size-16 mr-10"></i>
                            <p className='font-size-14 color-rgb-blue'>All Messages</p>
                        </div>
                        <div className='df-aic-jcc'>
                            <p className='bg-rgb-green py-2 px-10 border-radius-4 font-size-12 color-light font-weight-bold'>NEW</p>
                        </div>
                    </div>
                    <hr className='my-8 color-gray-300 font-weight-lighter opacity-4' />
                    <div className='d-flex align-item-center align-content-center justify-content-space-between mx-17 h-37'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <i class="fas fa-file-import font-size-16 mr-10"></i>
                            <p className='font-size-14 color-rgb-blue'>Trash</p>
                        </div>
                        <span ></span>
                    </div>
                    <div className='d-flex align-item-center align-content-center justify-content-space-between mx-17 h-37'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <i class="fas fa-cog font-size-16 mr-10"></i>
                            <p className='font-size-14 color-rgb-blue'>Others</p>
                        </div>
                        <div className='df-aic-jcc'>
                            <p className='bg-rgb-yellow py-2 px-10 border-radius-4 font-size-12 color-dark font-weight-bold'>512</p>
                        </div>
                    </div>
                    <hr className='my-8 color-gray-300 font-weight-lighter opacity-4' />
                    <h1 className='h-33 font-size-12 mx-17 mt-16 font-weight-bolder '>ONLINE FRIENDS</h1>
                    <div className="d-flex align-items-center justify-content-space-between mx-17">
                        {
                            onlineImageRandom.map((item, index) => 
                            <div key={index} className='h-50'>
                                <img className='w-38 h-38 border-radius-50% border-none' src={item.image} alt='Hinh' />
                                <p className='font-size-80 color-green position-relative ti-122 ri-22'>.</p>
                            </div>
                                )
                        }
                    </div>
                    <div className="d-flex align-items-center justify-content-space-evenly mx-17">
                        {
                            onlineList.map((item, index) => 
                            <div key={index} className='h-50'>
                                <img className='w-38 h-38 border-radius-50% border-none' src={item.image} alt='Hinh' />
                                <p className='font-size-80 color-green position-relative ti-122 ri-22'>.</p>
                            </div>
                                )
                        }
                    </div>
                    <button className='btn border w-172 h-33 font-weight-bold color-light bg-color-rgb-green-500 border-radius-30 py-4 px-16 mx-49 my-11 cursor font-size-12'>Start New Conversation</button>
                    <hr className='my-8 color-gray-300 font-weight-lighter opacity-4' />
                    <div className='h-33 mx-17 mt-16 d-flex align-items-center'>
                        <h1 className='h-100% w-100% font-size-12 font-weight-bolder mr-8'>TAGS</h1>
                        <small className='font-size-10'>IMPORTANT</small>
                    </div>
                    {
                        tagImportant.map((e,index) => 
                            <div key={index} className='df-aic mx-24 h-34 '>
                                <div className='circle-item' style={{border: `3px solid ${e.color}`}}></div>
                                <button className='bg-transparent border-none btn ml-20 font-size-14'>{e.name}</button>
                            </div>
                        )
                    }
                    <hr className='my-8 color-gray-300 font-weight-lighter opacity-4' />
                    <div className='d-flex align-item-center align-content-center mx-24 h-34'>
                        <div className='circle-item'></div>
                        <button className='bg-transparent border-none btn ml-20 font-size-14'>Other Tags</button>
                    </div>
                </div>
                <div className='main-right w-100% h-867'>
                    <div className='w-100% h-62 d-flex justify-content-space-between position-relative'>
                        <div className='h-100% d-flex align-items-center align-content-center'>
                            <h1 className='font-size-24 font-weight-100 pl-16 pr-8'>Inbox</h1>
                            <button onClick={handleClickOutside} className='bg-transparent font-size-13 font-weight-500 cursor py-24 mt-8 border-none color-rgb-blue'>
                                <i className="fas fa-angle-down"></i>
                            </button>
                            <div className={openTabMenu? 'max-w-0 position-absolute t-115 ml-88' : 'd-block tab-menu w-400 h-390 bg-gray-300 position-absolute t-115 ml-88 max-w-100% tr-all-ease-in-out-3'}>

                            </div>
                        </div>
                        <div className='d-flex align-items-center align-content-center border-none w-500 h-35 justify-content-center mr-24 align-self-center'>
                            <button onClick={() => setDisplayForm(!displayForm)} className='border-radius-10 w-400 py-11 mx-14 color-light bg-rgb-green border-none font-size-14 cursor hover'>Create</button>
                            <button className='pt-8 pb-11 px-13 border border-radius-left-4 bg-color-rgb-blue-100'>
                                <i className="fas fa-search"></i>
                            </button>
                            <input className='border w-100% py-9 px-11 color-gray-700 font-size-14 border-radius-right-4 border-left-none' placeholder='Search ...' type='text' /> 
                        </div>
                        <FormCreate d={displayForm} show={showFormEdit} setd={() => {setDisplayForm(true); setShowFormEdit('')}} index={index} ID={ID} />
                    </div>
                    <hr className='mt-1 mib-1 color-gray-100 font-weight-lighter opacity-4' />
                    {
                        dataMailbox.map((item,index) => {
                            return (
                            <div key={index} className='row bar-content'>
                                <div className="w-100% h-78 d-flex align-items-center ">
                                    <div className="col-5 d-flex">
                                        <div className="d-flex align-items-center align-content-center py-18 px-13 ml-13">
                                            <input className={`custom-checkbox-input btn-input d-none`} id={`id-${index}`} key={item.nameUser} type='checkbox' />
                                            <label for={`id-${index}`} className={`custom-checkbox-label w-16 h-16 cursor px-10 py-10`} />
                                            <i className="fas fa-star py-18 px-13 ml-30"></i>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center mr-50 ">
                                                <img className='w-42 h-42 border-radius-50% px-8' src={item.image? item.image : '/images/eight.jpg'} alt='hinh' />
                                                <div className="d-block align-self-center px-8">
                                                    <h1 className='font-size-13 font-weight-bold'>{item.nameUser}</h1>
                                                    <p className='font-size-13 '>{item.info}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 d-flex">
                                        <div className="d-flex align-items-center">
                                            <p className='font-size-14'>{item.comment}</p>
                                        </div>
                                    </div>
                                    <div className="col-2 d-flex position-relative">
                                        <span key={index} className="far fa-edit mx-16 py-8" onClick={() => {setShowFormEdit(showFormEdit === 'edit'? '' : 'edit'); localStorage.setItem(`id_${index}`, item._id); setIndex(index); setID(item._id)}}></span>
                                        <span key={index} className="fas fa-times mx-16 py-8" onClick={() => {handleDelete(index); localStorage.setItem(`id_${index}_del`, item._id)}} />
                                    </div>
                                </div>
                                <hr className='mt-1 w-100% color-gray-100 font-weight-lighter align-self-bottom mib-1 opacity-4' />
                            </div>
                            )
                        })
                    }
                    <div className="w-100% h-50 position-absolute t-900 l-600 d-flex align-items-center align-content-center">
                        <button className='btn w-32 h-35 border-none cursor pr-1' onClick={preSlide} type='button'><i className="fas fa-chevron-left"></i></button>
                        {
                            buttonPage.map((e,index) => <button key={index} className='btn w-32 h-35 border-none cursor pr-1' style={e === current? {background: 'green', color:'white'} : {}} onClick={() => {setCurrent(e); setCheck(false)}} type='button'>{e + 1}</button>)
                        }
                        <button className='btn w-32 h-35 border-none cursor pr-1' onClick={nextSlide} type='button'><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <hr className='my-1 color-gray-300 font-weight-lighter ml-280 opacity-4' />
            <div className='w-100% h-50 bg-gray-100 ml-280'>
                 
            </div>
        </div>
    )
}

export default Mail;