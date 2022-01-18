import {UPDATE_NOTES} from '../actions/ActionTypes';

const initialUserDetailsInfo = {
  NoteList: '',
};

const ViewNoteScreenReducer = (state = initialUserDetailsInfo, action) => {
  let newState;

  console.log('[ViewNoteScreenReducer] - state : ', JSON.stringify(state));
  console.log('[ViewNoteScreenReducer] - action : ', JSON.stringify(action));

  switch (action.type) {
    case UPDATE_NOTES:
      newState = {
        NoteList: action.NoteTableDetails,
      };

      console.log(
        '[ViewNoteScreenReducer] - New State : ',
        JSON.stringify(newState),
      );

      return newState;

    default:
      console.log('[AddNewScreenReducer] - Default : ', action.type);
      return state;
  }
};

export default ViewNoteScreenReducer;
