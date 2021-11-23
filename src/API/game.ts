import axios, { AxiosPromise } from "axios";

const getTopByPlaytime = (genre = "", platform = ""): AxiosPromise<any> => {
    return axios(`${process.env.REACT_APP_API_URL}/select_top_by_playtime?genre=${genre}&platform=${platform}`);
};

const getTopByPlayers = (genre = "", platform = ""): AxiosPromise<any> => {
    return axios(`${process.env.REACT_APP_API_URL}/select_top_by_players?genre=${genre}&platform=${platform}`);
} 

export {getTopByPlaytime, getTopByPlayers};