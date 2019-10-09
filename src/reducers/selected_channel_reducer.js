const selectedChannelReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'CHANNEL_SELECTED':
      return action.payload;
    default:
      return state;
  }
};
export default selectedChannelReducer;
