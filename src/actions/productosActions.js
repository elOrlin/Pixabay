import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

export function crearNuevoProductoAction(producto) {
    return ({dispatch}) => {
        dispatch(agregarProducto() )
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
})