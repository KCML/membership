import React from 'react';
import {Col,Container,Row} from 'reactstrap';
import ForgetPassword from '../components/ForgetPassword';
const ForgetPasswordPage = () => {
    return(
        <Container>
            <Row>
                <Col className="mx-auto" sm={12} md={12} lg={10}>
                    <ForgetPassword />
                </Col>
            </Row>
        </Container>
    );
}

export default ForgetPasswordPage;