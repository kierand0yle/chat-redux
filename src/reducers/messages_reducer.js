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
  }
};
export default messagesReducer;
