import {LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS} from './constant';

export const toggleFlag = (username, password) => dispatch => {
  dispatch({
    type: LOGIN_START,
  });
  fetch(
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-security/login',
    {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    },
  ).then(response => {
    if (!(response.status === 200)) {
      //   Alert.alert('wrong credentials');
      dispatch({
        type: LOGIN_FAILED,
        data: {flag: false},
      });
    } else {
      var temp = response.headers.map.authorization.split(' ');
      dispatch({
        type: LOGIN_SUCCESS,
        data: {header: temp[1], flag: false},
      });
    }
  });
};
