import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import Login from './components/pages/Login'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import ProtectedRoute from './components/pages/ProtectedRoute';
import {useEffect,useState} from 'react'
import { reach } from 'yup';
function App() {
  let user = localStorage.getItem('login') === "true" ?true :false
  return (
  <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        (!{user} ?
        <Route  path = "/" element={ <Login/>}/>
         <Route element = {<ProtectedRoute/>}>
            <Route element = {<Home/>} path = "/home" exact />
            <Route path='/user/add' element = {<AddUser/>}/>
          <Route path='/user/edit/:id' element = {<EditUser/>}/>
          <Route path='/user/:id/' element = {<User/>}/>
          </Route>
        : 
        <Route  path = "" element={ <Login/>} exact/>

        )
          <Route  path='/about' element = {<About/>}/>
          <Route  path='/contact' element = {<Contact/>}/>
          <Route  path = '*'element = {<NotFound/>}/>
          

        </Routes>
    </div>
  </Router>
  );
}

export default App;