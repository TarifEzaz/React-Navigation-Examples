import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from './Screens/Home';
import WelcomeWorld from './Screens/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={HelloWorld}/>
        <Stack.Screen name="Welcome" component={WelcomeWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

