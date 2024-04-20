const redux = require('redux')
const createStore = redux.createStore;
const combineReducers =  redux.combineReducers;
const reduxLogger = require('redux-logger')


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info:"first redux action"
    }
}
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info:"second redux action"
    }
}
//------------STATE-----------
// const initialState={
//     numOfCakes:10,
//     numOfIceCreams:20
// }
const initialCakeState = {
    numOfCakes:10
}
const initialIceCreamState = {
    numOfIceCreams:20
}


//------------------REDUCER-----------------

// const reducer = (state=initialState, action)=> {
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,   //copying the state object
//             numOfCakes: state.numOfCakes -1
//         }
//         case BUY_ICECREAM: return{
//             ...state,   //copying the state object
//             numOfIceCreams: state.numOfIceCreams -1
//         }

//         default:
//             return state
//     }
// }

// cake reducer
const cakeReducer = (state=initialCakeState, action)=> {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,   //copying the state object
            numOfCakes: state.numOfCakes -1
        }
    
        default:
            return state
    }
}


//icecream reducer
const iceCreamReducer = (state=initialIceCreamState, action)=> {
    switch(action.type){

        case BUY_ICECREAM: return{
            ...state,   //copying the state object
            numOfIceCreams: state.numOfIceCreams -1
        }

        default:
            return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//stores
//holding application state
const store = createStore(rootReducer);

//allows access to state to be updated using the getState
console.log('Initial state', store.getState());


//subscribing to the
const unsubscribe = store.subscribe(()=>console.log('Updated State', store.getState()));

//dispatch takes action a parameter allowing the state to be updated
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe()