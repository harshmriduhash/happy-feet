import axios from 'axios'


export const getProducts = () => {
    let req = axios.get(
        'https://happyfeetbackend.herokuapp.com/'
        )
    return dispatch => {
        req.then(res => {
            dispatch({
                type: 'get_products',
                payload: res.data
            })
        })
    }
}

export const getBrand = (val) => {
    return {
        type: 'get_brand',
        payload: val.charAt(0).toUpperCase() + val.slice(1)
    }
}

export const getColor = (color) => {
    return {
        type: 'get_color',
        payload: color
    }
}

export const getMinPrice = (value) => {
    return {
        type: 'get_min_price',
        payload: value
    }
}

export const getMaxPrice = (value) => {
    return {
        type: 'get_max_price',
        payload: value
    }
}

export const buy = (product) => {
    return {
        type: 'buy',
        payload: product
    }
}

export const getOrder = (cart) => {
    return {
        type: 'order',
        payload: cart
    }
}

export const gotHome = () => {
    return {
        type: 'got_home'
    }
}