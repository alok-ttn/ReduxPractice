import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/Components/login';
import StoreScreen from './src/Components/Store';
import Itemdetails from './src/Components/ItemDetails';
import Concept from './src/Components/concept';
import Search from './src/Components/search';
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
        name="StoreScreen"
        component={StoreScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Concept"
        component={Concept}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemDetails"
        component={Itemdetails}
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
