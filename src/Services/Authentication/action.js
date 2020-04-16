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
    // this.splitString(response.headers.map.authorization);
    // console.log(this.state.headerTag);
    if (!(response.status === 200)) {
      //   Alert.alert('wrong credentials');
      dispatch({
        type: LOGIN_FAILED,
      });
    } else {
      //   const data = response.json();
      //   navigation.navigate('HomeScreen', {headerTag: this.state.headerTag});
      dispatch({
        type: LOGIN_SUCCESS,
      });
    }
  });
};
