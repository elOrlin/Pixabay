import { combineReducers } from "redux";
import ProductosReducer from './productosReducer';

export default combineReducers({
    productos: ProductosReducer
})