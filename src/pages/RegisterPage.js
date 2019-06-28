import React from 'react';
import { Container, Col, Row} from 'reactstrap';
import Register from '../components/Register';
const RegisterPage = () => {
    // const [isAuth,setIsAuth] = useState(false);
    return(
        <Container>
            <Row>
                <Col className="mx-auto" sm={9} md={7} lg={5}>
                    <Register />
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPage;