import {UPDATE_NOTES} from '../actions/ActionTypes';

const initialUserDetailsInfo = {
  NoteList: '',
};

const AddNewScreenReducer = (state = initialUserDetailsInfo, action) => {
  let newState;

  console.log('[AddNewScreenReducer] - state : ', JSON.stringify(state));
  console.log('[AddNewScreenReducer] - action : ', JSON.stringify(action));

  switch (action.type) {
    case UPDATE_NOTES:
      newState = {
        NoteList: action.NoteTableDetails,
      };

      console.log(
        '[AddNewScreenReducer] - New State : ',
        JSON.stringify(newState),
      );

      return newState;

    default:
      console.log('[AddNewScreenReducer] - Default : ', action.type);
      return state;
  }
};

export default AddNewScreenReducer;
