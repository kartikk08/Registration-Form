import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Profile() {
    const user=useSelector((state)=>state.user.user);
  return (

    <div>

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><h1>YOUR PROFILE !!!</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><h4>Home</h4></Nav.Link>
            <Nav.Link><h4>About</h4></Nav.Link>
            <Nav.Link as={Link} to="/editprofile"  style={{ textDecoration : "none" }}><h4>Edit Profile</h4></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        

<div className='profile'>
<div className="box2">

<h1> First Name : </h1>
<h3>{user.firstname}</h3>
<br/>
<h1> Last Name : </h1>
<h3>{user.lastname}</h3>
<br/>
<h1> Email : </h1>
<h3>{user.email}</h3>
<br/>
<h1> Date Of Birth : </h1>
<h3>{user.dob}</h3>
<br/>
<h1> Password : </h1>

<h3 type='password'>{user.password}</h3>
<br/>
<h1> Contact : </h1>

<h3>{user.contact}</h3><br/>

<button 
        className="registerButton" 
        style={{marginTop: '0px',width:'180px', height:'50px',  marginLeft: '180px'}}>
        <Link className="link" as={Link} to="/editprofile"  style={{ textDecoration : "none" }}>
        <h4>UPDATE</h4> 
        </Link>
</button>

</div>
</div>
</div>
  
  )
}

export default Profile;