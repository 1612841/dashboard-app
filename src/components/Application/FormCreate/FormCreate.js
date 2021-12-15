import React, { useState, useEffect } from 'react';
import './FormCreate.scss';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { postInfo, editData } from '../../../redux/action/action';

const moment = require("moment");

function FormCreate({d, setd, show, index, ID}) {

    const dispatch = useDispatch();

    const [submitData, setSubmitData] = useState({
        nameUser: "",
        info: moment(new Date()).format('MM-DD').toString(),
        comment: ""
    });

    const [dataEdit, setDataEdit] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        try {
            const getinfo = postInfo({
                image: "",
                nameUser: submitData.nameUser,
                info: submitData.info,
                comment: submitData.comment,
            });
            dispatch(getinfo); 
            setSubmitData({nameUser:"", info:"", comment: ""});
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        try {
            const edit = editData({
                image: "",
                nameUser: submitData.nameUser,
                info: submitData.info,
                comment: submitData.comment,
                index: index,
            });
            dispatch(edit); 
            setSubmitData({nameUser:"", info:"", comment: ""});
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (show === 'edit') {
            try {
                const getdataid = async () => {
                const res = await axios.get(`http://localhost:8800/api/lists/find/${ID}`);
                return res.data
            }
                getdataid().then(e => setDataEdit(e))
                setDataEdit([])
        } catch (err) {
                return err
        }
    }
    }, [index]);

    return (
        <div className={`${d? '' : 'h-400 opacity-4 visibility-visible'} ${show !=='edit'? '' : 'h-400 opacity-4 visibility-visible'} position-absolute t-90 r-250 bg-black tr-all-ease-in-out-4 z-index-10 w-340 border-radius-20 h-0 opacity-0 visibility-hidden center`}>
            <form className='row'>
                <div className='col center '>
                    <input value={submitData.nameUser === "" && dataEdit.nameUser !== ""?dataEdit.nameUser : submitData.nameUser} onChange={(e) => {setSubmitData({...submitData, nameUser: e.target.value}); setDataEdit({...dataEdit, nameUser: ""})}} className='px-16 py-12 m-16 border-none border-radius-6 outline-none color-black' type='text' placeholder='Your Name...' />
                </div>
                <div className='col center '>
                    <input value={submitData.comment === "" && dataEdit.comment !== ""?dataEdit.comment : submitData.comment} onChange={(e) => {setSubmitData({...submitData, comment: e.target.value}); setDataEdit({...dataEdit, comment: ""})}} className='px-16 py-12 m-16 border-none border-radius-6 outline-none color-black' type='text' placeholder='Your Comment...' />
                </div>
                <div className='df-jcc' onClick={setd}>
                    <button onClick={handleSubmit} className={`${d? 'd-none' : ''} py-8 px-56 mt-50 border-radius-10 border-none bg-green font-weight-bold color-light cursor hover`} type='submit'>Create</button>
                    <button onClick={handleUpdate} className={`${d === true? '' : 'd-none'} py-8 px-56 mt-50 border-radius-10 border-none bg-green font-weight-bold color-light cursor hover`} type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default FormCreate;
