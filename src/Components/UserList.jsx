import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

function UserList(props) {
    return (
      <div>
        {props.users.map((user) => (
          <UserItem user={user} 
          delete={props.delete}
          updateUser={props.updateUser}
          />
          
        ))}
      </div>
    );
  }
  
 function mapStateToProps(state) {
  return {
    users:state.users,
  }
}


export default connect(mapStateToProps,{}) (UserList);