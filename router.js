import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/Components/login';
import HomeScreen from './src/Components/home';
import StoreList from './src/Components/storeList';
import Concept from './src/Components/concept';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';
import {FlatList} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="StoreList" component={StoreList} />
      <Stack.Screen
        name="Concept"
        component={Concept}
        options={{headerShown: false}}
      />
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
