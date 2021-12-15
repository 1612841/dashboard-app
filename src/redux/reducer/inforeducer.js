import React from 'react';
import * as actionTypes from '../actionTypes/actionTypes';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const _ = require("lodash")

export const initialState = {
    info: [],
    getinfo: []
};

const getdata = async () => {
        try {
            const res = await axios.get('http://localhost:8800/api/lists');
            initialState.info = res.data
        } catch (err) {
            console.log(err)
        }
    }
const postdata = async (e) => {
    const {index, ...dataE} = e;
    try {
        const res = await axios.post('http://localhost:8800/api/lists', dataE);
        window.location.reload()
    } catch (err) {
        console.log(err)
    }
}
const editdata = async (e) => {
    const id = localStorage.getItem(`id_${e.index}`);
    const {index, ...b} = e;
    try {
        const res = await axios.patch(`http://localhost:8800/api/lists/${id}`, b);
        localStorage.clear();
        window.location.reload()
    } catch (err) {
        console.log(err)
    }
}

const deletedata = async (e) => {
    const id = localStorage.getItem(`id_${e}_del`);
    try {
        const res = await axios.delete(`http://localhost:8800/api/lists/${id}`);
        let a;
        console.log(res.data, "akakaka")
        localStorage.clear();
        if (res.data === "deleted") {
            localStorage.setItem("note", "aaa");
            a = "aaa"
        }
        if (a !== "") {
            a="";
            setTimeout(window.location.reload(), 4500)
        }
    } catch (err) {
        console.log(err)
    }
}

export const InfoReducer = (state = initialState, action) => {

    getdata();
    
    switch (action.type) {
        case actionTypes.EDIT_DATA_SUCCESS: {
            editdata(action.payload)
            return {
                ...state
            }
        }
        case actionTypes.GET_DATA_SUCCESS:{
            return {
                 ...state
            }
        }
        case actionTypes.DELETE_DATA_SUCCESS: {
            deletedata(action.payload)
            return {
                ...state
            }
        }
        case actionTypes.POST_DATA_SUCCESS: {
            postdata(action.payload)
            return {
                ...state
            }
        }
        default:
            return state
            
    }
};
