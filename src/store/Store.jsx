import { createStore } from 'redux';
import UsersReducer from '../reducers/UsersReducer';

 export const store= createStore (UsersReducer)