import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import { thunk } from 'redux-thunk';
// Agrega el middleware que deseas utilizar
const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;
