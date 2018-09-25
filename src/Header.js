import React from 'react';

import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const {logado, onLogin, onLogout} = props;

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#">Elo Twitter</Navbar.Brand>
            <Nav className="ml-auto">
                {
                    logado ? (
                        <div>
                            <Button variant="light" style={{marginRight: 10}}>
                                <Link to="/configuracao">Configuração</Link>
                            </Button>
                            <Button variant="light" style={{marginRight: 10}}>
                                <Link to="/perfil">Meu Perfil</Link>                                
                            </Button>                            
                            <Button variant="danger" onClick={onLogout}>Sair
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Button variant="light" onClick={onLogin}>Login</Button>
                        </div>
                    )
                }
            </Nav>
        </Navbar>
    )
}

export default Header;