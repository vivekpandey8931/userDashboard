import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HomeScreen from './HomeScreen';
import axios from 'axios';
import { Container,Navbar, Nav, NavDropdown } from 'react-bootstrap';
function App() {
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("https://randomuser.me/api/", {
        params: {
          results: 100,
          nat: "us,dk,fr,gb"
        }
      })

      setUsers(data.results);
    }

    fetchUsers();

  }, [])

  const genderHandler = (gender) => {
    if (gender !== '') {
      if (gender === 'male') {
        setGender('male');
        const fetchPersons = users.filter(user => user.gender === 'male');
        setUsers(fetchPersons);
      }
      else if (gender === 'female') {
        setGender('female');
        const fetchPersons = users.filter(user => user.gender == 'female');
        setUsers(fetchPersons);
      }
    }
  }

  const countryHandler = (country) => {
    if (country === 'Denmark')
    {
      setCountry('Denmark')
      const fetchPersons = users.filter(user => user.location.country==='Denmark');
      setUsers(fetchPersons); 
    }
    else if (country === 'United States')
    {
      setCountry('United States')
      const fetchPersons = users.filter(user => user.location.country === 'United States');
      setUsers(fetchPersons); 
    }
    else if (country === 'United Kingdom')
    {
      setCountry('United Kingdom')
      const fetchPersons = users.filter(user => user.location.country === 'United Kingdom');
      setUsers(fetchPersons); 
      }
    
}



 
  return (
    <div className="App">
        <Navbar bg="dark" variant='dark' expand="lg">
          <Navbar.Brand >User DashBoard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="gender" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>genderHandler('male')}>Male</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => genderHandler('female')}>Female</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="country" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => countryHandler('United Kingdom')}>United Kingdom</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => countryHandler('United States')}>United States</NavDropdown.Item>
              <NavDropdown.Item onClick={() => countryHandler('Denmark')}>Denmark</NavDropdown.Item>
            </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      <main className='py-3'>
        <Container>
          < HomeScreen users={users} /> 
        </Container>

      </main>
    </div>
  );
}

export default App;
