import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDk1NzkwYzFmMjdjY2FkMTE4OTcxZTQ3OTFmOTYyMiIsInN1YiI6IjY2Mzg1OWU1OGRlMGFlMDEyY2Y2ZWJjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw0GmE-n0w-q--8x6NVC-OkALWyrFwz3Ba7JHxqs6Y0"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromAPI = async (url, params) => {
    try{
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        })
        return data;
    }catch(err){
        console.log(err)
        return err;
    }
}

