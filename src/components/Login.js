import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, Col, Form, FormFeedback, FormGroup, Input, Row} from 'reactstrap';
import validateInputValues from '../misc/EntryValidationResult';
import useValidation from '../hooks/useValidation';

const Login = () => {
    const {handleChange, handleEntry, hasSubmitted ,values, errors} = useValidation(login,validateInputValues);
    
    async function login()  {
        console.log("errors: " + errors);
        console.log("values: " + values);
        await axios.post('http://localhost:5000/login',values)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
    return(
        <Card className="card-entry my-5rem">
            <CardBody>
                <h5 className="card-title text-center">Login</h5>
                <Form className="form-entry">
                    <FormGroup>
                        <Input className="round-input-md" type="text" name="email"  placeholder="Email" onChange={handleChange} invalid={(errors.email) && hasSubmitted}/>
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input className="round-input-md" type="password" name="password"  placeholder="Password" onChange={handleChange} invalid={(errors.password) && hasSubmitted}/>
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                </Form>
                <Row>
                    <Col>
                        <Link to="/register">Not member yet?</Link>
                    </Col>
                    <Col>
                        <Link to="/forget" className="text-center">Forget Password?</Link>
                    </Col>
                </Row>
                <Button className="round-button-md" color="info" block onClick={()=>{handleEntry();console.log("Login clicked");}}>Login</Button>
            </CardBody>
        </Card>
    );
}

export default Login;