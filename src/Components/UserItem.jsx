import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';
import { deleteUser } from '../actions/UsersActions';
import { connect } from 'react-redux';

function UserItem(props) {

    const [isModalVisible, setShowModal] = useState(false);

    function showModal() {
        setShowModal(true);
    }

    function hideModal() {
        setShowModal(false);
    }

    return (
        <Row>
            <Col md-3><h4>Username</h4> {props.user.username}</Col>

            <Col md-3><h4>Email</h4> {props.user.email}</Col>

            <Col md-2><h4>Country</h4> {props.user.country}</Col>

            <div className="submit">
                <button className="renew" onClick={showModal}> Edit</button>
                <Modal show={isModalVisible} onHide={hideModal}>
                    <Modal.Header clodeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditUserForm
                            user={props.user}
                            updateUser={props.updateUser}
                            hideModal={hideModal} />
                    </Modal.Body>
                </Modal>

                <button className="remove" onClick={() => {
                    props.deleteUser(props.user.id);
                }}
                >Delete</button>
            </div>
        </Row>
    )
}

var mapDispatchTpProps = {
    deleteUser,
}
var mapStateToProps = () => { }

export default connect(mapStateToProps, mapDispatchTpProps)(UserItem);