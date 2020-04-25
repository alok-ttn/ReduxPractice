import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  STORE_ACCESS,
  STORE_SEARCH,
  STORE_CONCEPT,
  TOGGLE_SUCCESS,
} from './constant';
export const toggleSuccess = () => dispatch => {
  dispatch({
    type: TOGGLE_SUCCESS,
  });
};
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
export const toggleStore = header => dispatch => {
  fetch(
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
    {
      method: 'GET',
      headers: {
        Authorization: header,
      },
    },
  )
    .then(response => response.json())
    .then(responseJson => {
      dispatch({
        type: STORE_ACCESS,
        data: responseJson,
        // navigation.navigate('StoreList', {storeData: this.state.storeData});
      });
    });
};

export const toggleSearch = (header, newApi) => dispatch => {
  fetch(newApi, {
    method: 'GET',
    headers: {
      Authorization: header,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch({
        type: STORE_SEARCH,
        data: responseJson,
        // navigation.navigate('StoreList', {storeData: this.state.storeData});
      });
    });
};
export const toggleConcept = header => dispatch => {
  fetch(
    'https://admin-rel.priskoll.occdev.axfood.se/axfood/axfood-product-scan/concepts? ',
    {
      method: 'GET',
      headers: {
        Authorization: header,
      },
    },
  )
    .then(response => response.json())
    .then(responseJson => {
      dispatch({
        type: STORE_CONCEPT,
        data: responseJson,
        // navigation.navigate('StoreList', {storeData: this.state.storeData});
      });
    });
};
