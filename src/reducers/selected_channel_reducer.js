const selectedChannelReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SELECT_CHANNEL':
      return action.payload;
    default:
      return state;
  }
};
export default selectedChannelReducer;
