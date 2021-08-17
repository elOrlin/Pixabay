import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'


const inicialState = {
    productos: [],
    error: null,
    loading: false
}


export default function foo(state = inicialState, action){
    switch(action.type){
        case 'AGREGAR_PRODUCTO':
        return {

        }
            default:
            return state;
    }
}