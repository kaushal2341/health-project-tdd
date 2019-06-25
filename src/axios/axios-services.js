import axios from 'axios';
import { getHeaders, getHeadersForDocumentPost, errorHandler, convertObjectToRequestParam, createPathWithPathVariable } from './axios-helper'

// const SERVER_DOMAIN_CURRENT = process.env.SERVER_DOMAIN;
const SERVER_DOMAIN = "https://jsonplaceholder.typicode.com";

// ********************************* GET REQUESTS **********************************//
// HTTP GET Request - Returns Resolved or Rejected Promise

const genericGetMethod = (path, headers) => {
    return new Promise((resolve, reject) => {
        axios.get(`${SERVER_DOMAIN}${path}`, headers)
            .then(response => { resolve(response) })
            .catch(error => { reject(errorHandler(error)) });
    });
};

export const getRaw = (path) => {
    return new Promise((resolve, reject) => {
        axios.get(`${SERVER_DOMAIN}${path}`)
            .then(response => { resolve(response) })
            .catch(error => { reject(errorHandler(error)) });
    });
}

export const get = (path) => {
    return genericGetMethod(path, getHeaders());
};

export const getWithPathVariable = (path, id) => {
    let _pathWithVariable = createPathWithPathVariable(path, id);
    return genericGetMethod(_pathWithVariable, getHeaders());
};

export const getWithRequestParams = (path, paramsObject) => {
    let _pathWithStringParameters = convertObjectToRequestParam(path, paramsObject);
    return genericGetMethod(_pathWithStringParameters, getHeaders());
};

export const getWithPagination = (path, paginationObject) => {
    return getWithRequestParams(path, paginationObject);
}

// **********************************************************************************//

// ********************************* POST REQUESTS **********************************//

// HTTP POST Request - Returns Resolved or Rejected Promise

const genericPostMethod = (path, data, headers) => {
    return new Promise((resolve, reject) => {
        axios.post(`${SERVER_DOMAIN}${path}`, data, headers)
            .then(response => { resolve(response.data) })
            .catch(error => { reject(errorHandler(error)) });
    });
};

export const postRaw = (path, data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${SERVER_DOMAIN}${path}`, data)
            .then(response => { resolve(response) })
            .catch(error => { reject(errorHandler(error)) });
    });
};

export const post = (path, data) => {
    return genericPostMethod(path, data, getHeaders());
};

export const postWithPathVariables = (path, pathVariable, data) => {
    let _pathWithVariable = createPathWithPathVariable(path, pathVariable);
    return genericPostMethod(_pathWithVariable, data, getHeaders());
};

export const postWithRequestParams = (path, paramsObject, data) => {
    let _pathWithStringParameters = convertObjectToRequestParam(path, paramsObject);
    return genericPostMethod(_pathWithStringParameters, data, getHeaders());
};

export const postWithPagination = (path, paginationObject, data) => {
    return postWithRequestParams(path, paginationObject, data);
};

export const postForPDF = (path, data) => {
    return genericPostMethod(path, data, getHeadersForDocumentPost());
};

export const postForEXCEL = (path, data) => {
    return genericPostMethod(path, data, getHeadersForDocumentPost());
};

// **********************************************************************************//

// ********************************* PATCH REQUESTS **********************************//

// HTTP PATCH Request - Returns Resolved or Rejected Promise
export const patch = (path, data) => {
    return new Promise((resolve, reject) => {
        axios.patch(`${SERVER_DOMAIN}${path}`, data, getHeaders())
            .then(response => { resolve(response) })
            .catch(error => { reject(errorHandler(error)) });
    });
};

// **********************************************************************************//

// ********************************* DELETE REQUESTS **********************************//

// HTTP DELETE Request - Returns Resolved or Rejected Promise
export const del = (path) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${SERVER_DOMAIN}${path}`, getHeaders())
            .then(response => { resolve(response) })
            .catch(error => { reject(errorHandler(error)) });
    });
};

// **********************************************************************************//