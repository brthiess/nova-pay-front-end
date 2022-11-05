const initialState = {
  email: null,
  isSignedIn: false,
  showLoading: false,
  onDashboard: false,
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "user/updateEmail": {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        email: action.payload,
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
    case "modal/showLoading": {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        showLoading: action.payload,
      };
    }
    case "modal/showInfo": {
      return {
        ...state,
        showInfo: action.payload,
      };
    }
    case "modal/modalText": {
      return {
        ...state,
        modalText: action.payload,
      };
    }
    case "navigation/onDashboard": {
      return {
        ...state,
        onDashboard: action.payload,
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
