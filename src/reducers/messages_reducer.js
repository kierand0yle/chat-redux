const messagesReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload.messages;
    default:
      return state;

    case 'MESSAGE_POSTED':
      const oldState = state.slice(0); // (0) begins the slice at point 0, i.e copies the same array
      oldState.push(action.payload);
      return oldState;
  }
};
export default messagesReducer;
