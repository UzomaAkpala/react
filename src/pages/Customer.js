import { useParams, Link, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
import { baseUrl } from "../Shared"

export default function Customer() {
  const navigate = useNavigate()
  const [customer, setCustomer] = useState()
  const [notFound, setNotfound] = useState()
  const {id} = useParams()
useEffect(() => {
  const url = baseUrl + '/api/customers/' + id
  fetch(url)
  .then((response) => {
    if(response.status === 404){
        setNotfound(true)
    }
    return response.json()})
  .then((data) => {
    setCustomer(data.customer)
  })
}, [])

    return(
        <>
        {notFound ? <p>The customer with id {id} was not found</p> : null}
          {customer ? 
          <div>
           <p>{customer.id}</p> 
           <p> {customer.name}</p> 
           <p> {customer.industry}</p> 
          </div>
           : null}
           <Link to="/customers">Go Back</Link>
        </>
    )
}