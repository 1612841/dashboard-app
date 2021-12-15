export const postInfo = (info) => {
    return {
        type: 'POST_DATA_SUCCESS',
        payload: info,
    }
};

export const deleteData = (del) => {
    return {
        type: 'DELETE_DATA_SUCCESS',
        payload: del,
    }
};

export const editData = (edit) => {
    return {
        type: 'EDIT_DATA_SUCCESS',
        payload: edit,
    }
};
export const getDataid = (get) => {
    return {
        type: 'GET_DATA_SUCCESS',
        payload: get,
    }
};