import { fetchPageActionTypes } from "./action";

const initialState = {
  cmsData: [],
  loading: false,
  error: null
};

export const fetchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchPageActionTypes.FETCH_PAGE:
      return {
        ...state,
        cmsData: action.payload
      };

    default:
      return state;
  }
};
