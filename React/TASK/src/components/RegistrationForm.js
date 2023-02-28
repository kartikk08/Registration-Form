import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import '../css/register.css'
import { register } from "../state/action-creators";
import { store } from "../state/store";




export default function RegisterForm() {

  // const user=useSelector((state)=>state.user.user);
  const nameref = useRef();

  const [firstname, setfirstName] = useState('')
  const [lastname, setlastName] = useState('')
  const [password, setPassword] = useState('')
  const [dob, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')

  const [firstNameWarning, setFirstNameWarning] = useState(true)
  const [lastNameWarning, setLastNameWarning] = useState(true)
  const [passwordWarning, setPasswordWarning] = useState(true)
  const [emailWarning, setEmailWarning] = useState(true)
  const [contactWarning, setContactWarning] = useState(true)
  const [dobWarning, setDobWarning] = useState(true)

  const [warning, setWarning] = useState(false)


  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {

    setFirstNameWarning(firstname ? false : true);
    setLastNameWarning(lastname ? false : true);
    setPasswordWarning(password ? false : true);
    setEmailWarning(email ? false : true);
    setContactWarning(contact ? false : true);
    setDobWarning(dob ? false : true);
  }, 
  [firstname, lastname, password, email, contact, dob])


  const handleForm = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !dob || !contact) {
      setWarning(true)
      return;
    }


    dispatch(register({


      firstname,
      lastname,
      email,
      password,
      contact, dob


    }))


    console.log(store.getState());
    navigate("/profile")


  }


  return (

    <>
      <div className="register">

        <div className="box1">
          <span className="registerTitle">
            <h2 className="box">Registration-Form</h2></span>

          {warning && <h1 className="heading">PLEASE FILL ALL THE REQUIRED FIELDS !!!</h1>}

          <form className="registerForm">

            <div style={{ paddingRight: '10px' }}>
              <label style={{ padding: '10px' }}>
                <h4 >First Name : </h4>
              </label>

              <input
                type="text"
                className="registerInput"
                placeholder="Enter your firstname..."
                style={{ width: '713px', height: '60px', paddingRight: '10px' }}
                ref={nameref}
                name='firstname'
                required
                value={firstname} onChange={e => { setfirstName(e.target.value) }}


              />
              {/* {show && <p>* First name is required</p>} */}
              {firstNameWarning && <p>* First name is required</p>}

            </div>
            <br />
            <div>
              <label style={{ padding: '10px', marginTop: '15px' }}><h4>Last Name :</h4></label>
              <input
                type="text"
                className="registerInput"
                style={{ width: '713px', height: '60px', paddingRight: '10px' }}
                placeholder="Enter your lastname..."
                name="lastname"
                required
                value={lastname} onChange={e => setlastName(e.target.value)}

              />
              {/* {show && <p>* Last name is required</p>} */}
              {lastNameWarning && <p>* Last name is required</p>}

            </div>

            <label style={{ marginTop: '15px', marginLeft: '12px' }}>
              <h4>Email :</h4></label>
            <input
              style={{ width: '863px', height: '60px', paddingRight: '10px' }}
              type="email" id="email"
              className="registerInput"
              placeholder="Enter your email..."
              name="email"
              required
              value={email} onChange={e => setEmail(e.target.value)}
            />
            {/* {show && <p>* Email is required</p>} */}
            {emailWarning && <p>* Email is required</p>}


            <div className='dob' style={{ marginTop: '20px' }}>
              <label style={{ paddingRight: '20px', marginTop: '20px', marginLeft: '12px' }}>
                <h4>Date Of Birth : </h4>
              </label>

              <input
                type='date'
                placeholder='Enter date of birth'
                style={{ width: '200px', height: '60px', paddingRight: '10px' }}
                name='date'
                required
                value={dob} onChange={e => setDob(e.target.value)}
              />
              {/* {show && <p>* Date of Birth is required</p>} */}
              {dobWarning && <p>* Date of Birth is required</p>}
            </div>

            <label style={{ marginTop: '20px', marginLeft: '12px' }}>
              <h4>Password :</h4></label>
            <input
              style={{ width: '863px', height: '60px', paddingRight: '10px' }}
              type="password"
              className="registerInput"
              placeholder="Enter your password..."
              name='password'
              required
              value={password} onChange={e => setPassword(e.target.value)}
            />
            {/* {show && <p>* Password is required</p>} */}
            {passwordWarning && <p>* Password is required</p>}

            <label style={{ marginLeft: '12px', marginTop: '20px' }}>
              <h4>Contact Number : </h4>
            </label>
            <input
              style={{ width: '863px', height: '60px', paddingRight: '10px' }}
              type="number"
              className="registerInput"
              placeholder="+91-0123456789" pattern="+[0-9]{2}-[0-9]{10}"
              name='password'
              required
              value={contact} onChange={e => setContact(e.target.value)}
            />
            {/* {show && <p>* Contact is required</p>} */}
            {contactWarning && <p>* Contact is required</p>}

            <button className="registerButton"
              style={{ marginTop: '30px', width: '200px', height: '60px', marginLeft: '330px' }}
              type="submit" onClick={handleForm} >

              <Link className="link" as={Link} to="/" style={{ textDecoration: "none" }}>
                <h4>Register</h4>
              </Link>
            </button>

          </form>

        </div>
      </div>
    </>
  );
}
