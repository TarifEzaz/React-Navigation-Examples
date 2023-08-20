import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import Welcome from "./Welcome";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={Home} options={{ title: 'My Home' }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
  );
}