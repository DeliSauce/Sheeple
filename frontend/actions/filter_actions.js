export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_SKILL = "UPDATE_SKILL";
export const UPDATE_AUTOBOOK = "UPDATE_AUTOBOOK";
export const UPDATE_MINRATE = "UPDATE_MINRATE";
export const UPDATE_MAXRATE = "UPDATE_MAXRATE";


export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  location
});

export const updateAutoBook = (autobook) => ({
  type: UPDATE_AUTOBOOK,
  autobook
});
