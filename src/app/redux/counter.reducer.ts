import {Reducer,Action} from 'redux'
import {DECREMENT, INCREMENT,decrementAction,increaseAction } from './counter.action'
import {appState} from './app.state'

const initialState:appState={
    counter:0
}

export const reducer:Reducer<appState>=(state:appState=initialState,action:Action)=>{

    switch(action.type){
        case INCREMENT:{
            return new Object({   counter: state.counter+1 }) as appState
        }
        case DECREMENT:{
            return new Object({   counter: state.counter-1 }) as appState

        }
    }
    return initialState;
}