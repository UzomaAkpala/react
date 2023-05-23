import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from "./NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Defintion() {
    
   const [word, setWord] = useState()
   const [error, setError] = useState()
   let {search} = useParams()
   const [notFound, setNotFound] = useState(false)
   const navigate = useNavigate()
 
    useEffect(() => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search
        fetch(url)
        .then((response) => {
            console.log(response.status)
            if (response.status === 404){
                setNotFound(true)
            }else if(response.status === 401) {
                navigate('/login')
            }else if(response.status === 500) {
                setError(true)
            }

            if(!response.ok) {
                setError(true)

                throw new Error("Something went wrong")
            }
          
            return response.json()})
        .then((data) => {
          setWord(data[0].meanings[0].definitions[0].definition)
          
    })
         .catch((e) => {
            console.log(e.message)
         })
    }, [])

    if (notFound === true){
        return(
        <>
        <NotFound />
        <Link to='/dictionary'>Search another</Link>
        </>
        )
    }

    if (error === true){
        return(
        <>
        <p>Something went wrong, try again</p>
        <Link to='/dictionary'>Search another</Link>
        </>
        )
    }

    return(
      
        <div>
        
             {word 
             ? <>
             <h2>Here is a definition:</h2>
             {word}
             <p>Search Again:</p>
             <DefinitionSearch />
             </>
              : null
            }
        </div>
    )
}