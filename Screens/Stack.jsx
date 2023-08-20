import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import Home from "./Home";
import Welcome from "./Welcome";

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
      <Stack.Navigator 
        initialRouteName="Welcome"       
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={
          { 
            title: 'My Home',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
          ), }}/>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
  );
}