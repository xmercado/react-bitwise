import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className='App'>
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='text-decoration-none'>
                        <h1>OMDBflix</h1>
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Link to='/' className='text-white p-1'>Home</Link>
                        <Link to='/user-list' className='text-white p-1'>User List</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};