import{Action,ActionCreator} from 'redux'
export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";

export const increaseAction:ActionCreator<Action>=()=>({
type:INCREMENT
});

export const decrementAction:ActionCreator<Action>=()=>({
type:DECREMENT
});
