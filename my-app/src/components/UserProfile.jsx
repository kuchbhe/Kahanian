import React, { useEffect, useRef, useState } from "react";
import { link, useHistory } from "react-router-dom"
import { useAuth, currentUser } from '../contexts/AuthContext'
import Clientfooter from './Clientfooter'
import Navigationbar from './header/Navbar.jsx'
import b1 from "./Black_1.jpg"; 
import "./UserProfile.css";



// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";


//importing firebase
import {app} from "../firebase"
var firebase = require('firebase/app');
require('firebase/database');

function User() {

  let DB = app.database();
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [ID, setID] = useState('') //to get the id

  const phoneRef = useRef()
  const cityRef = useRef()
  const addressRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const { currentUser } = useAuth();

  // orderByChild('email').equalTo(currentUser.email)

  useEffect(() =>{
    let email = currentUser.email
    // console.log(email.toString())
    DB.ref("User").on('value', snapshot => {
      let obj = snapshot.val();
      Object.keys(obj).map(id => {
        if(email === obj[id].email){
          console.log(id)
          setID(id)
          setPhoneNumber(obj[id].phoneNumber)
          setCity(obj[id].city)
          setAddress(obj[id].address)
          setLastName(obj[id].lastName)
          setFirstName(obj[id].firstName)
        }
      })
      console.log(ID)
    });
  });


  async function handleSubmit(e) {
    e.preventDefault()
    var userField = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: currentUser.email,
      phoneNumber: phoneRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      isGuest: false,
      isCustomer: true,
      isAdmin: false
    }

    //hanlde checks for empty fields
    
    //update database
    console.log(ID)
    let UserRef = DB.ref().child(`/User/` + ID).set(
      userField,
      err => {
        if (err)
            console.log(err)
        else
            console.log("no errorrrrr")
        }
    )

  }
    
  
  
  return (
    <div>
      <div>

      </div>
      <Navigationbar/>
      <Container fluid>
        <Row className="left">
          <Col  md="4" >
          
          <Row>
          <a href="/userprofile">
          <button type="button" class="btn-dark" href = "/userprofile"> Account Info</button> 
          </a>
          </Row>
          <Row>
          <a href = "/dashboard">
          <button type="button" class="btn btn-outline-dark" > Dashboard &nbsp;&nbsp; </button>&nbsp;&nbsp;
          </a>
          </Row>
        
          </Col>


          <Col md="6" >
            <Card > 
              <Card.Header>
                <Card.Title as="h4">Account Information</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit = {handleSubmit}>
                 
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="right">First Name</label>
                        <Form.Control
                          defaultValue= {firstName}
                          placeholder="Company"
                          type="text"
                          ref = {firstNameRef}
                          required 
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label className="right">Last Name</label>
                        <Form.Control
                          defaultValue= {lastName}
                          placeholder="Last Name"
                          type="text"
                          ref = {lastNameRef}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                   
                  </Row>
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label className="right">Address</label>
                        <Form.Control
                          defaultValue={address}
                          placeholder="Home Address"
                          type="text"
                          ref = {addressRef}
                          required 
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group>
                        <label className="right">Phone number</label>
                        <Form.Control
                          defaultValue={phoneNumber}
                          placeholder="Number"
                          type="text"
                          ref = {phoneRef}
                          required 
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="right">Email</label>
                        <Form.Control
                          defaultValue= {currentUser.email}
                          placeholder="Email"
                          type="text" readOnly
                          required 
                        ></Form.Control>
                      </Form.Group>
                      </Col>


                      <Col md="6">
                      <Form.Group>
                        <label className="right">City</label>
                        <Form.Control
                          defaultValue={city}
                          placeholder="City"
                          type="text"
                          ref = {cityRef}
                          required 
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                   
                  </Row>
                 <div><small> &nbsp;</small></div>
                  <Button
                    className="btn btn-dark "
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </Container>
      <Clientfooter/>
    </div>
  );
}

export default User;