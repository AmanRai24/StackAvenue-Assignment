import createStore from 'redux';
import reducer from "../Reducers";

let store;
export function ConfigureStore(){
     store=createStore(reducer);
     return store;
}