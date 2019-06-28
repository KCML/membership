import React from 'react';
import { Container, Col, Row} from 'reactstrap';
import Login from '../components/Login';
const LoginPage = () => {
    // const [isAuth,setIsAuth] = useState(false);
    return(
        <Container>
            <Row>
                <Col className="mx-auto" sm={9} md={7} lg={5}>
                    <Login />
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;

