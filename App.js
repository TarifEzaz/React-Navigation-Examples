import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from './Screens/Home';
import WelcomeWorld from './Screens/Welcome';
import Tab from "./Screens/Tab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen name="Home" component={HelloWorld}/>
        <Stack.Screen name="Welcome" component={WelcomeWorld} />
        <Stack.Screen name="Tab" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

