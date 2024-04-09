import {useState, useEffect} from 'react'
import apiClient from "../services/apiclient";
import { CanceledError } from 'axios';


interface FetchResponse<T>{
    count: number,
    results: T[],
}

export const useData=<T>(endpoint:string) =>{
 const [data,setData]=useState<T[]>([]);
 const [error,setError]=useState('');
 const [loading,setLoading]=useState(false);
 useEffect(()=> {
    const controller =new AbortController();
    setLoading(true);
     apiClient.get<FetchResponse<T>>(endpoint,{
        signal:controller.signal})
     .then((res)=>{
        setData(res.data.results);
        setLoading(false);})
     .catch((err)=>{
        if (err instanceof CanceledError) return;        
        setError(err.message);
        setLoading(false);});
     return ()=>controller.abort();
 },[]);
  return {data,error,loading};
}

export default useData;