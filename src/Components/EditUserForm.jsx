import React, { useState }   from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions/UsersActions';

  
function EditUserForm(props) {

        const [state, setState] = useState({
          username: props.user.username,
          email: props.user.email,
          password: props.user.password,
          country: props.user.country,
        });
      
        function handleOnChange(event) {
          setState({
            ...state,
            [event.target.name]: event.target.value,
          });
        }
      
        function handleSubmit() {
          let user  = { ...state, id: props.user.id };
          props.editUser(props.user.id, user);
          props.hideModal();
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
          <button type="button" className="btn" onClick={handleSubmit}>
            Update
          </button>
                </div>
                
            </form>

        </div>
        
    )
}
var mapDispatchToProps = {
      editUser,
    }
var mapStateToProps= () =>{}

export default connect(mapStateToProps,mapDispatchToProps) (EditUserForm);