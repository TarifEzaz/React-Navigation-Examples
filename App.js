import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./Screens/Tab";
import Drawer from "./Screens/Drawer";
import Stack from "./Screens/Stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Stack" component={Stack} options={{ title: 'My Stack' }}/>
        <Tab.Screen name="Tab" component={Tabs} />
        <Tab.Screen name="Drawer" component={Drawer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

