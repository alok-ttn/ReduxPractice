import {
  TOGGLE_FLAG,
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from './constant';
const initialState = {
  isLoading: 0,
  isFailed: 0,
  isSuccess: 0,
  token: '',
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {...state, isLoading: 1};
    case LOGIN_FAILED:
      return {...state, isFailed: 1, isLoading: 0};
    case LOGIN_SUCCESS:
      return {...state, isSuccess: 1, isLoading: 0};
    default:
      return state;
  }
};

export default homeReducer;
