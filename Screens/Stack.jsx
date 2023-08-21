import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Home from "./Home";
import Welcome from "./Welcome";
import ModalScreen from './Modal';

const Stack = createStackNavigator();

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
        <Stack.Group>
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
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="MyModal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
  );
}