import React, { useState, useEffect } from 'react';
import './Mailbox.css';
import '@fortawesome/fontawesome-free/js/all.js';

function Mailbox() {

    const [current, setCurrent] = useState(0);

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
    
    const itemlist = [
        {
            name: 'Important',
            color: 'green'
        },
        {
            name: 'Favourites',
            color: 'yellow'
        },
        {
            name: 'Actions',
            color: 'pink'
        },
    ];

    const maillistData = [
        {
            image: '/images/one.jpg',
            nameUser: 'Duy Quoc',
            info: 'Last seen online 15 minutes ago',
            comment: 'Nullam dictum felis eu pede mollis pretium.'
        },
        {
            image:  '/images/two.jpg',
            nameUser: 'Duy One',
            info: 'Last seen online 7 minutes ago',
            comment: '	But I must explain to you how all this mistaken idea of denouncing pleasure ...'
        },
        {
            image:  '/images/three.jpg',
            nameUser: 'Duy Two',
            info: '',
            comment: '	But I must explain to you how all this mistaken idea of denouncing pleasure ...'
        },
        {
            image:  '/images/four.jpg',
            nameUser: 'Duy Three',
            info: '',
            comment: 'Create stunning UIs for your pages with these layout components...'
        },
        {
             image:  '/images/five.jpg',
             nameUser: 'Duy Four',
             info: '',
             comment: '	Etiam sit amet orci eget eros faucibus...'
        },
        {
            image:  '/images/six.jpg',
            nameUser: 'Duy Five',
            info: 'Last seen online 1 hour ago',
            comment: 'Nullam dictum felis eu pede mollis pretium.'
        },
        {
             image: '/images/seven.jpg',
             nameUser: 'Duy Six',
             info: '',
             comment: '	But I must explain to you how all this mistaken idea of denouncing pleasure ...'
        },
        {
            image:  '/images/eight.jpg',
            nameUser: 'Duy Seven',
            info: '',
            comment: '	But I must explain to you how all this mistaken idea of denouncing pleasure ...'
        },
        {
            image: '/images/nine.jpg',
            nameUser: 'Duy Eight',
            info: '',
            comment: 'Create stunning UIs for your pages with these layout components...'
        },
        {
            image: '/images/seven.jpg',
            nameUser: 'Duy Six',
            info: '',
            comment: '	But I must explain to you how all this mistaken idea of denouncing pleasure ...'
       },
       {
           image:  '/images/eight.jpg',
           nameUser: 'Duy Seven',
           info: '',
           comment: '	But I must explain to you how all this mistaken idea of denouncing pleasure ...'
       },
       {
           image: '/images/nine.jpg',
           nameUser: 'Duy Eight',
           info: '',
           comment: 'Create stunning UIs for your pages with these layout components...'
       },        
    ];

    ////////////////////////////
    // Cal
    let pagenumber = 0;

    if (maillistData.length%5 === 0 ) {
        pagenumber = maillistData.length/5
   }
   else {
        pagenumber = Math.floor(maillistData.length/5 ) + 1;
   };
    ///////////////////////////
    const nextSlide = () => {
        setCurrent(current === (pagenumber - 1)? 0 : (current + 1));
    };
    const preSlide = () => {
        setCurrent(current === 0? (pagenumber - 1) : (current -1));
    };

    let dataMailbox = maillistData.slice(current*5,(current + 1)*5);

    /////////////////////////////
    let buttonPage = [];
    for (let i = 0; i < pagenumber; i= i+1 ) {
        buttonPage.push(i)
    }
    //////////////////////////////

    return (
        <div className='mailbox'>
            <div className="mailboxwrap">
                <div className="mailhead">
                    <div className="mailheadleft">
                        <button type='button' ><i class="fas fa-power-off"></i></button>
                        <div className="mailheadleftinfo">
                            <h1>Mailbox</h1>
                            <p>Create stunning UIs for your pages with these layout components.</p>
                        </div>
                    </div>
                    <div className="mailheadright">
                        <button type='button' ><i class="fas fa-star"></i></button>
                        <button className='mailheadrightbtn' type='button' ><i class="fas fa-toolbox"></i>Button</button>
                    </div>
                </div>
                <div className="mailbody">
                    <div className="mailbodyleft">
                        <div className="mailbodyleft__wrap">
                            <div className="mailbodyleft__write">
                                <button type='button'>Write New Email</button>
                            </div>
                            <div className="mailbodyleft__inform">
                                <h1>MY ACCOUNT</h1>
                                <div className="mailbodyleft__informpara">
                                    <div className='mailbodyleft__informpara__head'>
                                        <i class="far fa-comment-alt"></i>
                                        Inbox
                                    </div>
                                    <span style={{borderRadius: '13px', padding:'3px 10px 3px 10px', backgroundColor:'blue', fontSize:'11px !important' }}>8</span>
                                </div>
                                <div className="mailbodyleft__informpara">
                                    <div className='mailbodyleft__informpara__head'>
                                        <i class="fas fa-file-import"></i>
                                        Sent Items
                                    </div>
                                    <span></span>
                                </div>
                                <div className="mailbodyleft__informpara">
                                    <div className='mailbodyleft__informpara__head'>
                                        <i class="fas fa-cog"></i>
                                        All Messages
                                    </div>
                                    <span style={{borderRadius: '4px', padding:'1px 15px 3px 15px', backgroundColor:'green', fontWeight:'bolder' }}>New</span>
                                </div>
                            </div>
                            <hr className="mailbodyleft__informhr" />
                            <div className="mailbodyleft__informother">
                                 <div className="mailbodyleft__informpara">
                                    <div className='mailbodyleft__informpara__head'>
                                        <i class="fas fa-file-import"></i>
                                        Trash
                                    </div>
                                    <span></span>
                                </div>
                                <div className="mailbodyleft__informpara">
                                    <div className='mailbodyleft__informpara__head'>
                                        <i class="fas fa-cog"></i>
                                        Others
                                    </div>
                                    <span style={{borderRadius: '4px', padding:'1px 15px 3px 15px', backgroundColor:'rgb(240, 164, 50)', fontWeight:'bolder', color:'black' }}>512</span>
                                </div>
                            </div>
                            <hr className="mailbodyleft__informhrother" />
                            <div className="mailbodyleft__informonline">
                                 <div className="mailbodyleft__informonline__head">
                                    <h1>ONLINE FRIENDS</h1>
                                 </div>
                                 <div className="mailbodyleft__informonline__body">
                                        {
                                            onlineImageRandom.map((item) => 
                                            <div className={item.class? item.class : "mailbodyleft__informonline__body__wrap"}>
                                                <img src={item.image} alt='Hinh' />
                                                <div style={{color: item.color}} className='mailbodyleft__informonline__body__wrapdot'>.</div>
                                            </div>
                                                )
                                        }
                                 </div>
                                 <div className="mailbodyleft__informonline__bodytwo">
                                        {
                                            onlineList.map((item) => 
                                            <div className={item.class? item.class : "mailbodyleft__informonline__body__wrap"}>
                                                <img src={item.image} alt='Hinh' />
                                                <div style={{color: item.color}} className='mailbodyleft__informonline__body__wrapdot'>.</div>
                                            </div>
                                                )
                                        }
                                </div>
                                 <div className="mailbodyleft__informonline__footer">
                                        <button type='button'>Start New Conversation</button>
                                 </div>
                            </div>
                            <hr className="mailbodyleft__informhrthree" />
                            <div className="mailbodyleft__informfooter">
                                <div className="mailbodyleft__informfooteritem">
                                    <h1>TAGS</h1>
                                    <p>IMPORTANT</p>
                                </div>
                                <div className="mailbodyleft__informfooter__group">
                                    {
                                        itemlist.map((e) => 
                                        <div className="mailbodyleft__informfooter__groupitem">
                                            <div style={{border:`4px solid ${e.color}` }} className='mailbodyleft__informfooter__groupcircle' />
                                            <p>{e.name}</p>
                                        </div>
                                        )
                                    }
                                </div>
                                <hr className="mailbodyleft__informfooter__hr" />
                                <div className="mailbodyleft__informfooteritemfooter">
                                    <div className='mailbodyleft__informfooteritemfooter__circle' />
                                    <p>Other Tags</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mailbodyright">
                        <div className="mailbodyright__head">
                            <p>Inbox <i class="fas fa-chevron-down"></i></p>
                            <div className='mailbodyright__head__search'>
                                <i class="fas fa-search"></i>
                                <input type='text' />
                            </div>
                        </div>
                        <div className="mailbodyright__main">
                        {
                            dataMailbox.map(item => {
                                return (
                            <div className="mailbodyright__mainbar">
                                <div className="mailbodyright__mainhead">
                                    <input type='checkbox' />
                                    <i class="fas fa-star"></i>
                                </div>
                                <div className="mailbodyright__mainbody">
                                    <div className="mailbodyright__mainbody__one">
                                        <img src={item.image} alt='hinh' />
                                        <div className="mailbodyright__mainbody__one__infor">
                                            <h1>{item.nameUser}</h1>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                    <div className="mailbodyright__mainbody__two">
                                        <p>{item.comment}</p>
                                        <i class="fas fa-carrot" />
                                    </div>
                                </div>
                                <div className="mailbodyright__mainback">
                                    <i class="far fa-calendar-alt" />
                                    <p>7 Dec</p>
                                </div>
                            </div>
                                )
                            })
                        }
                        </div>
                        <div className="mailbodyright__footer">
                            <button onClick={preSlide} type='button'><i class="fas fa-chevron-left"></i></button>
                            {
                                buttonPage.map(e => <button style={e === current? {background: 'green', color:'white'} : {}} onClick={() => setCurrent(e)} type='button'>{e + 1}</button>)
                            }
                            <button onClick={nextSlide} type='button'><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="mailfoot">

                </div>
            </div>
        </div>
    )
}

export default Mailbox;
