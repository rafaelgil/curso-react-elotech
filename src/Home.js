import React from 'react';

import { Container, Row, Col, Form, Button, ListGroup, Image } from 'react-bootstrap'

class Home extends React.Component {

    render() {
        return (
            <div>
                <Container style={{ marginTop: 10 }}>
                    <Form style={{ borderStyle: 'groove', padding: 10, borderRadius: 8 }}>
                        <Form.Row>
                            <Col xs="10">
                                <Form.Control as="textarea" />
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Postar
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    <Row>
                        <Col xs="10">
                            <ListGroup>
                                <ListGroup.Item>Fulano</ListGroup.Item>
                                <ListGroup.Item>Mensagem</ListGroup.Item>                                
                            </ListGroup>
                        </Col>
                        <Col xs="2">
                            <Image src="" rounded />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Home;