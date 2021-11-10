const initialState = {
  username: null,
  isSignedIn: false,
  showModal: false,
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "user/updateUsername": {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        username: action.payload,
      };
    }
    case "user/updateIsSignedIn": {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        isSignedIn: action.payload,
      };
    }
    case "modal/showModal": {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        showModal: action.payload,
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
