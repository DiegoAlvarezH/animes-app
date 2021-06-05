import { useState } from "react";
import axios from 'axios';

export const useMainContent = () => {

    const [search, setSearch] = useState("");
    const [animeList, setAnimeList] = useState([]);
    const [animeFav, setAnimeFav] = useState([])
    
    const handleList = (anime) => {
        if(animeFav.includes(anime)){
            return;
        }

        setAnimeFav(prevState => [...prevState, anime]);
    }

    const handleSearch = async(e) => {
        e.preventDefault();
        getAnimeList(search);
    }
    //llamar la lista de anime que se requiera
    const getAnimeList = async( query ) => {
        const { data } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&limit=6`);
        const { results } = data;

        setAnimeList(results); 
    }

    return {
        search,
        setSearch,
        handleSearch,
        animeList,
        animeFav,
        handleList
    }
}
