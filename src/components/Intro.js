import React,{Fragment} from 'react';
import {Col,Container, Row} from 'reactstrap';

const Intro = () => {
    return(
        <Fragment>
            <header className="masthead">
                <Container className="container h-100">
                    <Row className="row h-100 align-items-center">
                        <Col className="text-center">
                            <h1 className="font-weight-light">Your IoT is your thing</h1>
                            <p className="lead">You have control over it</p>
                        </Col>
                    </Row>
                </Container>
            </header>
            <section className="py-5">
                <Container>
                    <h2 className="font-weight-light">Page Content</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
                </Container>
            </section>
        </Fragment>
    );
}

export default Intro;