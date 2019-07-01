import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody,Col, Form, FormFeedback, FormGroup, Input, Row} from 'reactstrap';
import validateInputValues from '../misc/EntryValidationResult';
import useValidation from '../hooks/useValidation';

const Register = () => {
    const {handleChange, handleEntry, hasSubmitted ,values, errors} = useValidation(register,validateInputValues);
    
    async function register(){
        console.log(values);
        axios.post('http://localhost:5000/register',values)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
    return(
        <Card className="card-entry my-5rem">
            <CardBody>
                <h5 className="card-title text-center">Register</h5>
                <Form className="form-entry">
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Input className="round-input-md" type="text" name="lastname"  placeholder="Last Name" onChange={handleChange} invalid={(errors.lastname) && hasSubmitted}/>
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Input className="round-input-md" type="text" name="firstname"  placeholder="First Name" onChange={handleChange} invalid={(errors.firstname) && hasSubmitted}/>
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input className="round-input-md" type="text" name="email"  placeholder="Email" onChange={handleChange} invalid={(errors.email) && hasSubmitted}/>
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input className="round-input-md" type="password" name="password1"  placeholder="Password" onChange={handleChange} invalid={(errors.password1) && hasSubmitted}/>
                        <FormFeedback>{errors.password1}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input className="round-input-md" type="password" name="password2"  placeholder="Confirmation" onChange={handleChange} invalid={(errors.password2) && hasSubmitted}/>
                        <FormFeedback>{errors.password2}</FormFeedback>
                    </FormGroup>
                </Form>
                <Link to="/login">Already member?</Link>
                <Button className="round-button-md" color="info" block onClick={()=>{handleEntry("register");console.log("Register is clicked")}}>Regsiter</Button>
            </CardBody>
        </Card>
    );
}

export default Register;