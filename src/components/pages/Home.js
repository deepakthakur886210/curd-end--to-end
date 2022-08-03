import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, Outlet} from 'react-router-dom';
import { useNavigate, useParams} from 'react-router-dom'
import EditUser from '../users/EditUser';

const Home = (props) => {
  const {id}  = useParams();
    let history = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        website: ""
    });
   

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }
    useEffect(()=> {
        loadUser();
    },[])
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result =await axios.get("http://localhost:3003/users")
    setUsers(result.data.reverse());
  }
  const deleteUser = async id =>{
   await axios.delete (`http://localhost:3003/users/${id}`);
    loadUsers();
  }
  return (<>

    <div className='container'>
      <div className='py-4'>
        <h1>Home Page</h1>
        <Link to= "/user/add" className='btn btn-outline-light'>Add User</Link>

<button className='btn btn-outline-light me-2'
onClick={() => {
  localStorage.setItem('login', "false")
    history("/");
  
}}
>
Logout
</button>
        <table className="table border shadow">
          <thead className="thead-dark table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((user, index) => (
              <tr>
              <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
             
                <Link to={`/user/${user.id}`} class='btn btn-primary me-2' >View</Link>
                <EditUser userDetails={user}  />
                <Link to=" " class='btn btn-danger me-2'  onClick={()=> deleteUser(user.id)}>Delete</Link>
                
              </td>
              </tr>
             
              
           ))
            }
          </tbody>
        </table>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Home;