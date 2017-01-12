// cartDuck.js
const ADD_THING = "cart/ADD_THING";
const REMOVE_THING = "cart/REMOVE_THING";

const initialState = {
  things: []
};

export default function reducer( state = initialState, action ) {
  switch( action.type ) {
    case ADD_THING:
      return {
        things: [ ...state.things, action.thing ]
      };
    case REMOVE_THING:
      return {
        things: state.things.filter( thing => thing._id !== action.thing._id )
      };
    default:
      return initialState;
  }

  return state;
}

export function addThing( thing ) {
  return { type: ADD_THING, thing };
}

export function removeThing( thing ) {
  return { type: REMOVE_THING, thing };
}
