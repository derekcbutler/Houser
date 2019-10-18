import axios from 'axios';
import {
    SAVE_INPUTS,
    SAVE_INPUTS_TO_DB,
    CLEAR_INPUTS
} from './actionTypes';

const initialState = {
    inputs: []

}

export const saveInputs = (
    inputs,
    blahblah,
    fillInLater
) => {
    let savedInputs = [
        inputs,
        blahblah,
        fillInLater
    ]
    return {
        type: SAVE_INPUTS,
        payload: savedInputs
    }
}

export const saveInputsToDB = (inputs) => {
    let data = axios.post('/api/wizard', inputs).then(res => res.data)
    return {
        type: SAVE_INPUTS_TO_DB,
        payload: data
    }
}