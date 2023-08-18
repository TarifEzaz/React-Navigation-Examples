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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HelloWorld}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

