import {
    FETCH_APPLICATIONS_SUCCESS,
    FETCH_APPLICATIONS_ERROR,
    FETCH_SINGLE_APPLICATION_SUCCESS,
    FETCH_SINGLE_APPLICATION_ERROR
    
} from '../actions/protected-data';

const initialState = {
    error: null,
    applications:[],
    applicationDetails:{
        companyName:'',
        positionTitle:'',
        location:'',
        dateAdded:new Date(),
        postingLink:'',
        status:'Pending',
        notes:''
    }
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_APPLICATIONS_SUCCESS) {
        return Object.assign({}, state, {
            applications: action.data,
            error: null
        });
    } else if (action.type === FETCH_APPLICATIONS_ERROR || FETCH_SINGLE_APPLICATION_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if(action.type === FETCH_SINGLE_APPLICATION_SUCCESS) {
        return Object.assign({}, state, {
            applicationDetails:action.data,
            error: null
        });
    }
    return state;
}
