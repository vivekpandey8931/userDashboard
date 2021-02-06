import React,{useState} from 'react'
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';
const Header = ({ users,setUsers }) => {
    const [gender, setGender] = useState('');
    const maleGenderHandler = () => {
        setUsers("male");
    }
    const femaleGenderHandler = () => {
        setUsers('female');
    }


    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Navbar.Brand href="#home">User DashBoard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={maleGenderHandler}>Male</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={femaleGenderHandler}>Female</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
