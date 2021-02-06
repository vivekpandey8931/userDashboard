import React  from 'react'
//import products from '../products';
import Profile from './components/Profile';
import { Row, Col } from 'react-bootstrap';


const HomeScreen = ({users}) => {
   
    const renderUsers = users.map(user => (
        <Col key={user.id.value} sm={12} md={6} lg={4} xl={3}>
            <Profile user={user} />
        </Col>
    ))

    return (
        <>
            <h1><stron>Users:</stron></h1>
            <Row>
                {renderUsers}
            </Row>
        </>
    )
}

export default HomeScreen;
