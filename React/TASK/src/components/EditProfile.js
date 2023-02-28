import '../css/register.css'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from "react";
import { update } from '../state/action-creators'
import { store } from '../state/store'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function EditProfile() {

  const user=useSelector((state)=>state.user.user);
  // console.log("user",user)
  const [firstname, setfirstName] = useState(user.firstname)
  const [lastname, setlastName] = useState(user.lastname)
  const [password, setPassword] = useState(user.password)
  const [dob, setDob] = useState(user.dob)
  const [email, setEmail] = useState(user.email)
  const [contact, setContact] = useState(user.contact)

  const [firstNameWarning, setFirstNameWarning] = useState(true)
  const [lastNameWarning, setLastNameWarning] = useState(true)
  const [passwordWarning, setPasswordWarning] = useState(true)
  const [emailWarning, setEmailWarning] = useState(true)
  const [contactWarning, setContactWarning] = useState(true)
  const [dobWarning, setDobWarning] = useState(true)

  
  const dispatch= useDispatch();

  useEffect(() => {

    setFirstNameWarning(firstname ? false : true);
    setLastNameWarning(lastname ? false : true);
    setPasswordWarning(password ? false : true);
    setEmailWarning(email ? false : true);
    setContactWarning(contact ? false : true);
    setDobWarning(dob ? false : true);
  }, 
  [firstname, lastname, password, email, contact, dob])


  const handleSubmit = (e) => 
  {
  e.preventDefault();

  dispatch(update({
    firstname,
    lastname, email, 
    dob, 
    password, 
    contact}));
  console.log(store.getState());

  }



  return (
    <>
     
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><h4> Hiii !!!   {user.firstname} {user.lastname}</h4></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"  style={{ textDecoration : "none" }}><h4>Home</h4></Nav.Link>
            <Nav.Link as={Link} to="/profile"  style={{ textDecoration : "none" }}><h4>About</h4></Nav.Link>
            <Nav.Link href="/editprofile"><h4>Edit Profile</h4></Nav.Link>
          </Nav>
          <h4> &nbsp; </h4>
        </Container>
      </Navbar>
   

<div className="register1">

<div className="box3">

    <form className="registerForm2"  >

    
        <label style={{padding: '10px'}}>
        <h4 >First Name : </h4>
        </label>
<input style={{width:'600px', height:'30px',  marginLeft:'13px'}}
type="text" placeholder='firstname' value={firstname} 
onChange={e => setfirstName(e.target.value)}/>
 {firstNameWarning && <p>* First name is required</p>}
<br/>

<label style={{padding: '10px'}}><h4>Last Name :</h4></label>
<input style={{width:'600px', height:'30px',  marginLeft:'13px'}} 
type="text" placeholder='lastname' value={lastname} 
onChange={e => setlastName(e.target.value)}/>
{lastNameWarning && <p>* Last name is required</p>}
<br/>

<div className= 'dob' style={{marginTop: '20px'}}>
        <label style={{paddingRight:'20px', marginLeft: '12px'}}>
        <h4>Date Of Birth : </h4>
        </label>
<input type="date" value={dob} 
onChange={e => setDob(e.target.value)}/>
</div>
{dobWarning && <p>* Date of Birth is required</p>}
<br/>

<label style={{marginTop: '15px',padding: '10px' }}>
        <h4>Email :</h4></label>
<input  style={{width:'600px', height:'30px',  marginLeft:'13px'}} type="email" placeholder='email' 
value={email} onChange={e => setEmail(e.target.value)}/>
{emailWarning && <p>* Email is required</p>}
<br/>

<label style={{marginTop: '20px', marginLeft: '12px', paddingRight: '10px'}}>
        <h4>Password :</h4></label>
<input  style={{width:'600px', height:'30px',  marginLeft:'13px'}} type="password" placeholder='password' value={password} 
onChange={e => setPassword(e.target.value)}/>
 {passwordWarning && <p>* Password is required</p>}
<br/>

<label style={{ marginLeft: '12px', marginTop: '15px', paddingRight: '10px'}}>
        <h4>Contact Number : </h4>
        </label>
<input style={{width:'600px', height:'30px', marginLeft:'13px'}} type="text" placeholder='contact' value={contact} 
onChange={e => setContact(e.target.value)}/>
{contactWarning && <p>* Contact is required</p>}


<button  style={{marginTop: '30px',width:'150px', height:'50px',  marginLeft: '200px'}} 
 onClick={handleSubmit}> UPDATE </button>
</form>
 
      </div>
      </div>
    </>
  )
}

export default EditProfile