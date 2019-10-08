const channelsReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_CHANNELS':
      return action.payload;
    default:
      return state;
  }
};
export default channelsReducer;
