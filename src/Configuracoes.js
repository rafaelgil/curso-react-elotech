import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

class Configuracoes extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nome: '',
            userName: '',
            photoUrl: ''
        }
    }

    onSave = () =>{
        console.log(this.state);
    }

    onChange = (event) =>{
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const {nome, userName, photoUrl} = this.state;

        return (
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="nome" value={nome} onChange={this.onChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nome de usuário</Form.Label>
                        <Form.Control name="userName" value={userName} onChange={this.onChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Url da foto</Form.Label>
                        <Form.Control name="photoUrl" value={photoUrl} onChange={this.onChange}></Form.Control>
                    </Form.Group>
                </Form>
                <Button variant="success" onClick={this.onSave}>Salvar</Button>
            </Container>
        )
    }

}

export default Configuracoes;