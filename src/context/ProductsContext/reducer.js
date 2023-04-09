import { newDatas, WatchesData, ShoesData } from "../../utils/card/index.js"


const INITIAL_STATE = {
    newDatas:newDatas,
    shoesData: ShoesData,
    watchesData:WatchesData,
    cart:[],
    wishlist:[],
}
const ACTION_TYPES = {
    ADD_TO_CART:'ADD_TO_CART',
    INCREMENT_QUANTITY:'INCREMENT_QUANTITY',
    DECREMENT_QUANTITY:'DECREMENT_QUANTITY',
    DELETE_ITEM:'DELETE_ITEM',
    LIKED_ITEM:'LIKED_ITEM'
}

function reducer(state,action){
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART:{
            return state
        }
        case ACTION_TYPES.LIKED_ITEM:{
            // const res = ACTION_TYPES.LIKED_ITEM.filter((value)=> )
            // return state
        }
        case ACTION_TYPES.INCREMENT_QUANTITY:{
            return state
        }
        case ACTION_TYPES.DECREMENT_QUANTITY:{
            return state
        }
    
        default:
            return state

    }
}

export {INITIAL_STATE,ACTION_TYPES,reducer}
