import {UPDATE_LOADING} from '../actions/ActionTypes';

const initialUserDetailsInfo = {
  loading: '',
};

const AddNoteScreenReducer = (state = initialUserDetailsInfo, action) => {
  let newState;

  console.log('[AddNoteScreenReducer] - state : ', JSON.stringify(state));
  console.log('[AddNoteScreenReducer] - action : ', JSON.stringify(action));

  switch (action.type) {
    case UPDATE_LOADING:
      newState = {
        loading: action.loading,
      };

      console.log(
        '[AddNoteScreenReducer] - New State : ',
        JSON.stringify(newState),
      );

      return newState;

    default:
      console.log('[AddNoteScreenReducer] - Default : ', action.type);
      return state;
  }
};

export default AddNoteScreenReducer;
