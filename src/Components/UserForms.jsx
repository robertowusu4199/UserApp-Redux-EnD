import React, { useState }   from 'react';
import { connect } from 'react-redux';
import addUser from '../actions/UsersActions'

  
function UserForms(props) {

        const [state, setState] = useState({
          username: '',
          email: '',
          password: '',
          country: '',
        });
      
        function handleOnChange(event) {
          setState({
            ...state,
            [event.target.name]: event.target.value,
          });
        }
      
        function handleSubmit() {
          let userId = 10000 + Math.random() * 10000000;
          let user = { ...state, id: userId };
          props.addUser(user);
        }
    return(
        <div className="details" >
            <form>
                <div>
                <label>Username</label>
          <input
            type="text"
            name="username"
            value={state.username} 
            onChange={handleOnChange} 
          />
        </div> <br></br>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleOnChange} 
          />
        </div><br></br>

        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={state.country}
            onChange={handleOnChange} 
          />
        </div> <br></br>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleOnChange} 
          />
        </div> <br></br>

        <div>
          <button type="button" className="btnn" onClick={handleSubmit}>
            Create User
          </button>
                </div>
                
            </form>

        </div>
        
    )
}
export default connect(null,{addUser})(UserForms);