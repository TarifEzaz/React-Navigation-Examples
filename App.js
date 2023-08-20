import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from './Screens/Home';
import WelcomeWorld from './Screens/Welcome';
import Tab from "./Screens/Tab";
import Drawer from "./Screens/Drawer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen name="Home" component={HelloWorld} options={{ title: 'My Home' }}/>
        <Stack.Screen name="Welcome" component={WelcomeWorld} options={{ title: 'My Welcome' }} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

