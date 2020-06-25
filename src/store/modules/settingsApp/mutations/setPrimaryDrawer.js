export const setPrimaryDrawer = (state, payload) => {
  console.log(payload);

  return (state.primaryDrawer = {
    ...state.primaryDrawer,
    ...payload,
  });
};
