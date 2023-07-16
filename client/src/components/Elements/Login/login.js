import React, { Component, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
// import { }
import { withRouter, useNavigate } from "react-router-dom";

//login component of the application
const Login = () => {
  const [ adminCredential , setAdminCredential ] = useState( { username : '', password: '' })

  const navigation = useNavigate();
  const handleChange = (e) => {
    e.persist()
    setAdminCredential( ( prev ) =>  {return { ...prev, [e.target.id]: e.target.value }});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/API/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( adminCredential ),
    }).then((res) => {
      if (res.ok) {
        navigation("/");
      }
      else  alert("Username/Password is wrong!!")
    })
  };

  
  return (
    <div className="container mt-4">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Login</p>
              <div className="grey-text">
                <MDBInput
                  id="username"
                  label="Username"
                  icon="user"
                  group
                  onChange={(e) => handleChange( e )}
                  value = { adminCredential.username}
                />
                <MDBInput
                  id="password"
                  onChange={(e) => handleChange( e )}
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  value = { adminCredential.password }
                  validate
                />
              </div>
              <div style = {{ display: 'flex', justifyContent: 'center'}}>
                <MDBBtn color="primary" onClick={ handleSubmit } type = 'submit'>
                  Login
                </MDBBtn>

              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
