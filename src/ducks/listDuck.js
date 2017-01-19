// listDuck.js
const ADD_ITEM = "list/ADD_ITEM";
const REMOVE_ITEM = "list/REMOVE_ITEM";
const WORK_ITEM = "list/WORK_ITEM";
const COMPLETE_ITEM = "list/COMPLETE_ITEM";

const initialState = {
  todo: [],
  working: [],
  completed: []
};

export default function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case ADD_ITEM:
      return {
        todo: [...state.todo, action.item],
        working: [...state.working],
        completed: [...state.completed]
      };

    case REMOVE_ITEM:
      var returnObj = {
        todo: [...state.todo],
        working: [...state.working],
        completed: [...state.completed]
      };
      var found = false;
      var filt = (item) => {

      }

      if (action.cat === 'todo')
        returnObj.todo = state.todo.filter(item => item !== action.item);
      if (action.cat === 'working')
        returnObj.working = state.working.filter(item => item !== action.item);
      if (action.cat === 'completed')
        returnObj.completed = state.completed.filter(item => item !== action.item);

      return returnObj;

    case WORK_ITEM:
      return {
        todo: state.todo.filter(item => item !== action.item),
        working: [...state.working, action.item],
        completed: [...state.completed]
      };

    case COMPLETE_ITEM:
      return {
        todo: [...state.todo],
        working: state.working.filter(item => item !== action.item),
        completed: [...state.completed, action.item]
      };

    default:
      return initialState;
  }

  return state;
}

export function addItem(item) {
  return {type: ADD_ITEM, item};
}

export function workItem(item) {
  return {type: WORK_ITEM, item};
}

export function completeItem(item) {
  return {type: COMPLETE_ITEM, item};
}

export function deleteItem(item, cat) {
  return {type: REMOVE_ITEM, item, cat};
}
