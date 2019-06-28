import React from 'react';
import {Button,Card,CardBody,Input, InputGroup, InputGroupAddon} from 'reactstrap';

const ForgetPassword = () => {
    return(
        <Card className="card-entry my-15rem">
            <CardBody>
                <h5 className="card-title text-center">Don't Worry We got your back!</h5>
                <InputGroup>
                    <Input className="round-input-md" type="email" name="email" placeholder="your email"/>
                    <InputGroupAddon addonType="append">
                        <Button className="round-button-md" color="primary">Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
            </CardBody>
        </Card>
    );
}

export default ForgetPassword;