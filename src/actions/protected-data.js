import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_APPLICATIONS_SUCCESS = 'FETCH_APPLICATIONS_SUCCESS';
export const fetchApplicationsSuccess = data => ({
    type: FETCH_APPLICATIONS_SUCCESS,
    data
});

export const FETCH_APPLICATIONS_ERROR = 'FETCH_APPLICATIONS_ERROR';
export const fetchApplicationsError = error => ({
    type: FETCH_APPLICATIONS_ERROR,
    error
});

export const FETCH_SINGLE_APPLICATION_SUCCESS = 'FETCH_SINGLE_APPLICATION_SUCCESS';
export const fetchSingleApplicationSuccess = data => ({
    type: FETCH_SINGLE_APPLICATION_SUCCESS,
    data
});

export const FETCH_SINGLE_APPLICATION_ERROR = 'FETCH_SINGLE_APPLICATION_ERROR';
export const fetchSingleApplicationError = error => ({
    type: FETCH_SINGLE_APPLICATION_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchApplicationsSuccess(data)))
        .catch(err => {
            dispatch(fetchApplicationsError(err));
        });
};

export const fetchApplications = () => (dispatch, getState) => {//fetches all applications for a given user
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/applications`, {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => res.json())
    .then(responseData => dispatch(fetchApplicationsSuccess(responseData)))
    .catch(error => {
        dispatch(fetchApplicationsError(error));
    });
};

export const fetchSingleApplicationById = id => (dispatch, getState) => {//fetches a single application for a given user using its id
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/applications/${id}`, {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => res.json())
    .then(responseData => dispatch(fetchSingleApplicationSuccess(responseData)))
    .catch(error => {
        dispatch(fetchSingleApplicationError(error));
    });
};

export const deleteApplication = id => (dispatch, getState) => {//deletes a single application by using its id
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/applications/${id}`, {//do I need to return here?
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(dispatch(fetchApplications()))
    .catch(error => {
        dispatch(fetchApplicationsError(error));
    });
}

export const addApplication = application => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body:JSON.stringify({
        //populate the body in here
        companyName:application.companyName,
        positionTitle:application.positionTitle,
        location:application.location,
        dateAdded:application.dateAdded,
        postingLink:application.postingLink,
        status:application.status,
        notes:application.notes,
        id:application.id

        })
    })
    .then(data => dispatch(fetchApplications()))//fetches all applications after adding the current one so that the user sees an up to date list
    .catch(error => {
        dispatch(fetchApplicationsError(error));
    });
}

export const editApplication = application => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/applications/${application.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        },
        body:JSON.stringify({
            //populate the body in here
            companyName:application.companyName,
            positionTitle:application.positionTitle,
            location:application.location,
            dateAdded:application.dateAdded,
            postingLink:application.postingLink,
            status:application.status,
            notes:application.notes,
            id:application.id
    
            })
        })
        .then(data => dispatch(fetchApplications()))//fetches all applications after adding the current one so that the user sees an up to date list
        .catch(error => {
            dispatch(fetchApplicationsError(error));
        });
    }