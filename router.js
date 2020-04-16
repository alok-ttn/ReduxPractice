import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/Components/login';
import HomeScreen from './src/Components/home';
import StoreList from './src/Components/storeList';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StoreList" component={StoreList} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
