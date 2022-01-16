import {USER_DETAILS} from '../actions/ActionTypes';

const initialUserDetailsInfo = {
  Email: '',
  QRId: '',
  Username: '',
};

const QRScreenReducer = (state = initialUserDetailsInfo, action) => {
  let newState;

  console.log('[QRScreenReducer] - state : ', JSON.stringify(state));
  console.log('[QRScreenReducer] - action : ', JSON.stringify(action));

  switch (action.type) {
    case USER_DETAILS:
      newState = {
        Email: action.UserDetails[0].Email,
        QRId: action.UserDetails[0].QRId,
        Username: action.UserDetails[0].Username,
      };

      console.log('[QRScreenReducer] - New State : ', JSON.stringify(newState));

      return newState;

    default:
      console.log('[QRScreenReducer] - Default : ', action.type);
      return state;
  }
};

export default QRScreenReducer;
