import {TOGGLE_FLAG} from './constant';
export const toggleFlag = () => dispatch => {
  dispatch({
    type: TOGGLE_FLAG,
    data: 'true',
  });
};
