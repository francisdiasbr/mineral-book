import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/app/store';
import HomeScreen from './src/pages/Home/index';
import MineralInfoScreen from './src/pages/MineralInfo/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Minerais' }}/>
          <Stack.Screen name='MineralInfo' component={MineralInfoScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
