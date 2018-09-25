import React from 'react';

import {Container, Form, Button, Col, Row, Image} from 'react-bootstrap';

class Perfil extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={2}>
                        <Image src="logo.svg" rounded />
                    </Col>
                    <Col xs={6} md={10}>
                        <Row>
                            <label value="Nome">Vai</label>
                        </Row>
                        <Row>
                            <label value="Nome">Vai 2</label>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Perfil;