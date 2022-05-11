import {beginUpdate, errorUpdate, successUpdate} from './userSlice'
import axios from 'axios'


export const updateData = async (user, dispatch) => {
    dispatch(beginUpdate());
    try {
        const res = await axios.post("update", user);
        dispatch(successUpdate(res.data))
    } catch (error) {
        dispatch(errorUpdate())
    }
}