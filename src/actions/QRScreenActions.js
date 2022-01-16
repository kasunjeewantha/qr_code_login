import { USER_DETAILS } from "./ActionTypes";

// -------------------------------------
  // Actions
  // -------------------------------------
  export function UpdateUserDetails(UserDetails) {
    
    console.log("Action : UpdateUserDetails : ", JSON.stringify(UserDetails));
  
    return {
      type: USER_DETAILS,
      UserDetails: UserDetails,
    };
  }