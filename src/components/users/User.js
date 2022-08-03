import React, {useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        website: ""
    });
    const {id} = useParams();
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        // console.log(result);
        setUser(result.data)
    }
    useEffect(() =>{
        loadUser();
    })
  return (
    <div className='container'>
        <Link className='btn  btn-primary' to = "/home"> Back to Home</Link>
         <h1 className='display-4'> User Id: {id}</h1>
         <hr/>
         <ul className='list-group w-100 '>
         <li className='list-group-item'> Name : {user.name}</li>
         <li className='list-group-item'> Username : {user.username}</li>
         <li className='list-group-item'> Email : {user.email}</li>
         <li className='list-group-item'> Phone Number : {user.phone}</li>
         <li className='list-group-item'> Website : {user.website}</li>

         </ul>
    </div>
  )
}

export default User