

const redux= require('redux')
const reduxLogger=require('redux-logger')

const createStore = redux.createStore


const combineReducers = redux.combineReducers
const applyMiddleware= redux.applyMiddleware

const logger = reduxLogger.createLogger()

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,
    }
}

const intialCakeState={
    numOfCakes:10
}

const intialIceCreamState={
    numOfIceCream:10
}

const cakeReducer = (state = intialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state;
    }
}

const iceCreamReducer = (state = intialIceCreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
        default:return state;
    }
}

const rootReducer= redux.combineReducers(({
    cake: cakeReducer,
    iceCream: iceCreamReducer
}))

const store= createStore(rootReducer,logger);
// console.log('Initial state',store.getState())
const unsub= store.subscribe(()=>{})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsub();