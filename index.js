const BUY_CAKE = "BUY_CAKE";

//action creator
function buycake(){

    return {
        type: BUY_CAKE,
        info:"second redux action"
    }
}

//reducer
// (previousState, action) => newState

const initialState={
    numOfCakes:10
}

const reducer = (state=initialState, action)=> {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,   //copying the state object
            numOfCakes: state.numOfCakes -1
        }

        default:
            return state
    }
}