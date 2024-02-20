import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { store } from './src/app/store';
import HomeScreen from './src/pages/Home/index';
import MineralInfoScreen from './src/pages/MineralInfo/index';
import { RootStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const theme = {
  ...DefaultTheme,
  colors: {
    "colors": {
      "primary": "rgb(121, 89, 0)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(255, 223, 160)",
      "onPrimaryContainer": "rgb(38, 26, 0)",
      "secondary": "rgb(107, 92, 63)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(245, 224, 187)",
      "onSecondaryContainer": "rgb(36, 26, 4)",
      "tertiary": "rgb(74, 101, 70)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(204, 235, 196)",
      "onTertiaryContainer": "rgb(8, 32, 8)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(255, 251, 255)",
      "onBackground": "rgb(30, 27, 22)",
      "surface": "rgb(255, 251, 255)",
      "onSurface": "rgb(30, 27, 22)",
      "surfaceVariant": "rgb(237, 225, 207)",
      "onSurfaceVariant": "rgb(77, 70, 57)",
      "outline": "rgb(127, 118, 103)",
      "outlineVariant": "rgb(208, 197, 180)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(52, 48, 42)",
      "inverseOnSurface": "rgb(248, 239, 231)",
      "inversePrimary": "rgb(248, 189, 42)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(248, 243, 242)",
        "level2": "rgb(244, 238, 235)",
        "level3": "rgb(240, 233, 227)",
        "level4": "rgb(239, 232, 224)",
        "level5": "rgb(236, 228, 219)"
      },
      "surfaceDisabled": "rgba(30, 27, 22, 0.12)",
      "onSurfaceDisabled": "rgba(30, 27, 22, 0.38)",
      "backdrop": "rgba(54, 48, 36, 0.4)"
    }
  }.colors,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{ title: 'mineral-book' }}
            />
            <Stack.Screen
              name='MineralInfo'
              component={MineralInfoScreen}
              options={({ route }) => ({
                title: route.params.mineral.name,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}
