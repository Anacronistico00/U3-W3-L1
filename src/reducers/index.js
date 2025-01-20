const initialState = {
  favourites: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        favourites: {
          list: [...state.favourites.list, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
