import React from "react";
import { useParams } from "react-router-dom";
import useSWR from 'swr';


const Search = () => {
    const {id} = useParams()
    const fetcher = (url) => fetch(url,{
        method:'POST',
        body:JSON.stringify(
            {
                'id':id
            }
        ),
        headers: {
            'Content-Type': 'application/json',
          }
    }).then(res => res.json());
    const {data,error,isLoading} = useSWR('http://localhost:8000/lostandfound/search',fetcher)
    if (error){
        return(
            <div>
                error
            </div>
        )
    }
    if(isLoading){
        return(
            <div>
                loading
            </div>
        )
    }
    return(
        <div>
            {
                data.data ?
                 (<div>
                    found the item in our databases please checkout your mail
                 </div>)
                 :
                 (<div>
                    seems like there is no record regarding the item that is being submitted in ou database. please look forward for the mail.
                 </div>)
            }
        </div>
    )
}



export default Search