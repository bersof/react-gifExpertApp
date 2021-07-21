import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (Category)=>{


    const [state, setstate] = useState({
        data:[],
        loading:true,
    });

    useEffect( ()=>{
        getGifs(Category)
        .then( imgs=>{setstate({
            data: imgs,
            loading: false,
        });
        })
    },[Category]) 

    return state; // {data:[], loading:true}
}