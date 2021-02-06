import React from 'react'
import { Card,Image,ListGroup,Row,Col} from 'react-bootstrap';
const Profile = ({user}) => {
    return (
        <div>
            <Card style={{ width: '17rem',marginLeft:'5px'}}>
                <Row>
                    <Col>
                        <Image variant="top" src={user.picture.large} roundedCircle />
                    </Col>
                    <Col style={{justifyContent:'center',alignItems:'center'}}>
                        <Row>
                            <p><strong>{`${user.name.title} ${user.name.first} ${user.name.last}`}</strong></p>
                        </Row>
                        <Row>
                            <p>{user.dob.age}yrs ,{user.gender}</p>
                        </Row>   
                    </Col>
                    
                </Row>
                <Card.Body>
                    <ListGroup>
                        <h5>country:{user.location.country }</h5>
                        <p><strong>D.O.B:</strong>{user.dob.date}</p>
                        <p><strong> Phone: </strong> {user.phone}</p>
                        <p><strong> Email: </strong> {user.email}</p>
                    </ListGroup>
                     
                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile;
