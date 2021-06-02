//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import UserForms from './Components/UserForms';
import UserList from './Components/UserList';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  const [userToUpdate, setUserToUpdate] = useState({
    username: '',
    email: '',
    password: '',
    contry: '',

  })

  function addUser(user) {
    setUsers([...users, user]);
  }
  function deleteUser(id) {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  function updateUser(id, updateUserInfo) {
    let newUsers = users.map((user) => {
      if (user.id === id) {

        return updateUserInfo;
      }

      return user;

    });

    setUsers(newUsers)

  }

  return (
    <Container>
      <Row>
        <Col md-6>
          <UserForms 
          allUsers={users}/>
        </Col>

        <Col md-6>
          <UserList />
        </Col>
      </Row>     
    </Container>
  );
}

export default App;