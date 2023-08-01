import axios from "axios";

const REST_API_BASE_URL_getAll ='http://localhost:8080/criminalDb/criminals/getAll';
const REST_API_BASE_URL_create='http://localhost:8080/criminalDb/criminals/create';
const REST_API_BASE_URL_getById='http://localhost:8080/criminalDb/criminals/get'
const REST_API_BASE_URL_update='http://localhost:8080/criminalDb/criminals/edit';
const REST_API_BASE_URL_delete='http://localhost:8080/criminalDb/criminals/delete';



export const listAllCriminals = () => axios.get(REST_API_BASE_URL_getAll);
export const createCriminal= (criminal) => axios.post(REST_API_BASE_URL_create,criminal);
export const getCriminal = (criminalId) => axios.get(REST_API_BASE_URL_getById + '/' +criminalId);
export const updateCriminal= (criminalId,criminal) => axios.put(REST_API_BASE_URL_update + '/' + criminalId,criminal)
export const deleteCriminal= (criminalId) => axios.delete(REST_API_BASE_URL_delete + '/' + criminalId)

