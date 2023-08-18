import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function HelloWorld({navigation}) {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  )
}

function WelcomeWorld({navigation}) {
  return (
    <View>
      <Text>Welcome World!</Text>
    </View>
  )
}

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

