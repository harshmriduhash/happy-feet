let initialState = {
    products : [],
    filterBrand : "",
    filterProducts : [],
    filterColor: [],
    filterMinPrice: 0,
    filterMaxPrice: 100000,
    cart: [],
    cartItems: 0,
    cartTotal: 0,
    orders : [],
    getHome : false
}


function filter(newState){
    let newFiltered = newState.products.filter((e,i) => {
        if((e.productBrand.search(newState.filterBrand) >= 0 || newState.filterBrand === "") && 
        (newState.filterColor.includes(e.productColor) || newState.filterColor.length === 0) &&
        (e.productDiscountPrice >= newState.filterMinPrice || newState.filterMinPrice === 0) &&
        (e.productDiscountPrice <= newState.filterMaxPrice || newState.filterMaxPrice === 100000)                
        ){
            return true            
        }
        return
    })
    return newFiltered

}

export default function appReducer(state=initialState, action){
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        default:
            return newState
        case 'get_products':
            newState.products = action.payload
            newState.filterProducts = action.payload
            return newState
        case 'get_brand':
            newState.filterBrand = action.payload
           newState.filterProducts = filter(newState)
            return newState
        case 'get_color':
            if(newState.filterColor.includes(action.payload)){
                newState.filterColor.splice(newState.filterColor.indexOf(action.payload), 1)
            }
            else{
                newState.filterColor = [...newState.filterColor, action.payload]
            }
            newState.filterProducts = filter(newState)
            return newState
        case 'get_min_price':
            newState.filterMinPrice = action.payload
            newState.filterProducts = filter(newState)
            return newState
        case 'get_max_price':
            newState.filterMaxPrice = action.payload
            newState.filterProducts = filter(newState)
            return newState
        case 'buy':
            newState.cartItems += 1
            newState.cartTotal += action.payload.productDiscountPrice
            newState.cart = [...newState.cart, action.payload]
            return newState
        case 'order':
            newState.orders = action.payload.concat(newState.orders)
            newState.cart = []
            newState.cartItems = 0
            newState.cartTotal = 0
            newState.getHome = true
            return newState
        case 'got_home':
            newState.getHome = false
            return newState
    }

}