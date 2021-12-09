import axios, { AxiosPromise } from "axios";

const getHelloWorld = (): AxiosPromise<any> => {
    return axios(`${process.env.REACT_APP_API_URL}`);
};


export {getHelloWorld};