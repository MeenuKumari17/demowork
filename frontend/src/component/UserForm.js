import axios from "axios";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Input, Label, Navbar, NavbarBrand, Row } from "reactstrap";

const UserForm = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");

    const[formValues, setFormValues] = useState({name:"",email:"",phone:"",address:"",});

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);

        console.log(`formData: ${formData}`);

        axios({
            method: "post",
            url: "http://localhost:4000/users",
            data: formData,
            headers: {"Content-Type": "application/json"},
        }).then( function(response){
            console.log(`successfully registerd user ${response}`);
        }).catch(function(response){
            console.log(response)
        });
    }
    console.log(name, email, phone , address);

    return (
        <div>
            <Navbar
    color="info"
    light
  >
    <NavbarBrand
      className="me-auto fw-bold "
      href="/"
    >
      USER DETAIL
    </NavbarBrand>
    
    
      
        <Link className="btn btn-primary m-2" to="/view">View</Link>
        <Link className="btn btn-primary" to="/search">Search</Link>
     
  </Navbar>
            <Container>
                <Row>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg" >
                        <Form method="post" onSubmit={handleSubmit} >
                            <FormGroup>
                                <Label for="name" className="fw-bold">Name :</Label>
                                <Input onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" placeholder="Enter your name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email" className="fw-bold">Email :</Label>
                                <Input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Enter your email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone" className="fw-bold">Phone No. :</Label>
                                <Input onChange={(e)=>setPhone(e.target.value)} type="number" name="phone" id="phone" placeholder="Enter your phone number" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="address" className="fw-bold">Address</Label>
                                <Input onChange={(e)=>setAddress(e.target.value)} type="text" name="address" id="address" placeholder="Enter your address" />
                            </FormGroup>
                            <button type="submit" className="btn btn-success">Send</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserForm;