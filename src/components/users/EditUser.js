import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'

const EditUser = ({ userDetails }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        website: ""
    });
    const onSubmit = (e) => {
        e.preventDefault();
        window.location.reload(false);
        axios.put(`http://localhost:3003/users/${userDetails.id}`, user);
        handleClose("true");
        history("/home");
    }
    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${userDetails.id}`);
        setUser(result.data)
        // console.log(result.data)
    }
    useEffect(() => {
        loadUser();
    }, [])

    return (<>
        <Button variant="primary" onClick={handleShow}> Edit  </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit The User</Modal.Title>
            </Modal.Header>
            <Modal.Body><div className='container'>
                <div className='w-75 mx-auto shadow p-5'>
                    <h2 className='text-center mb-4'> Edit a User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className='form-group'>
                            <label className='form-control-lg' name='name'>Name</label>
                            <input type="text" className='form-control-lg' placeholder='Enter Your Name' name='name' value={name} onChange={e => onInputChange(e)} />
                        </div>
                        <div className='form-group'>
                            <label className='form-control-lg' name='Username'>Username</label>

                            <input type="text" className='form-control-lg' placeholder='Enter Your Username' name='username' value={username} onChange={e => onInputChange(e)} />
                        </div>
                        <div className='form-group'>
                            <label className='form-control-lg' name='email'>E-mail</label>

                            <input type="text" className='form-control-lg' placeholder='Enter Your E-mail Address' name='email' value={email} onChange={e => onInputChange(e)} />
                        </div>
                        <div className='form-group'>
                            <label className='form-control-lg' name='phone'>Phone Number</label>

                            <input type="text" className='form-control-lg' placeholder='Enter Your Phone Number' name='phone' value={phone} onChange={e => onInputChange(e)} />
                        </div>
                        <div className='form-group'>
                            <label className='form-control-lg' name='website'>Website</label>

                            <input type="text" className='form-control-lg' placeholder="Enter Your Website Name" name="website" value={website} onChange={e => onInputChange(e)} />
                        </div>
                        <div>

                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary btn-lg btn-block m-3 w-100' onSubmit={e => onSubmit(e)}>Update User</button>
                        </div>
                    </form>
                </div>
            </div></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default EditUser;