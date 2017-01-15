export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_SKILL = "UPDATE_SKILL";
export const UPDATE_AUTOBOOK = "UPDATE_AUTOBOOK";
export const UPDATE_MINRATE = "UPDATE_MINRATE";
export const UPDATE_MAXRATE = "UPDATE_MAXRATE";


export const updateFilter = (field, value) => {
  let type;
  switch(field) {
    case 'location':
      type = UPDATE_LOCATION;
      break;
    case 'skill':
      type = UPDATE_SKILL;
      break;
  }

  return ({
    type,
    [field]: value
  });
  
};
// export const updateLocation = (location) => ({
//   type: UPDATE_LOCATION,
//   location
// });
//
// export const updateAutoBook = (autobook) => ({
//   type: UPDATE_AUTOBOOK,
//   autobook
// });
