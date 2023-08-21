# React-Navigation-Examples
A project to demonstrate various aspects of react-navigation, one of the most satisfying utility library for React Native.

# FAQ about react-navigation

## What is NavigationContainer component in React Navigation? 
NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from App.js.

## What does @react-nativagation/native-stack do? 
Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
    
This navigator uses the native APIs UINavigationController on iOS and Fragment on Android so that navigation built with createNativeStackNavigator will behave exactly the same and have the same performance characteristics as apps built natively on top of those APIs. It also offers basic Web support using react-native-web.

Read more about Native Stack Navigator at: https://reactnavigation.org/docs/native-stack-navigator/

## What are the dependencies of @react-navigation/native-stack?

Two libraries react-native-safe-area-context and react-screens are required as dependencies for @react-nativagation/native-stack. They have the following basic usages: 

react-native-safe-area-context: handles safe area on iOS, android and the web. More on: https://www.npmjs.com/package/react-native-safe-area-context

react-native-screens: exposes react-navigation container components to React Native. More on: https://www.npmjs.com/package/react-native-screens

## How and where to wrap your NavigationContainer?
We need to wrap the whole app in NavigationContainer. Usually you'd do this in your entry file, such as index.js or App.js:

```code
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```
## What is NavigationContainer component in React Navigation?
 
NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from App.js.
 
## Give me a basic example of React Navigation.

```code
// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
```

## What is a Navigator in React Navigation? 

A Navigator is React component that decides how to render the screens you have defined. It contains Screen elements as its children to define the configuration for screens.
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> // <---- This is a Navigator
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

## How to add multiple screens with a initial screen in React Navigation? 

```code
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
## What does Stack.Navigator do? 
Stack.Navigator is a component that takes route configuration as its children with additional props for configuration and renders our content.

## What are the props of Stack.Screen? 
Each Stack.Screen component takes a name prop which refers to the name of the route and component prop which specifies the component to render for the route. These are the 2 required props.

## How to specify option for each screen? 
Each screen in the navigator can specify some options for the navigator, such as the title to render in the header. These options can be passed in the options prop for each screen component:

```code
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Overview' }}
/>
```

## How does the back button appears in @react-navigation/native-stack?

The header provided by the native stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button).

## What will happen if goback function inside navigation prop is called from the first screen? 

The following message will be shown: 

"The action 'GO_BACK' was not handled by any navigator.
Is there any screen to go back to?
This is a development-only warning and won't be shown in production."

## Give me the details of the Navigation prop of the React Navigation.
 
This prop will be passed to all screens, and it can be used for the following:
    • dispatch will send an action up to the router
    • navigate, goBack, etc are available to dispatch actions in a convenient way
Navigators can also accept a navigation prop, which they should get from the parent navigator, if there is one.
For more details, see the "Navigation prop document".
The "Route prop reference" section goes into more detail on this, describes workarounds, and provides more information on other properties available on route prop.

## How does a basic Navigation state look like? 

The state of a navigator generally looks something like this:

```code
{
  key: 'StackRouterRoot',
  index: 1,
  routes: [
    { key: 'A', name: 'Home' },
    { key: 'B', name: 'Profile' },
  ]
}
```
For this navigation state, there are two routes (which may be tabs, or cards in a stack). The index indicates the active route, which is "B".

## How do we set common option for all the screens? 
Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a screenOptions prop to the navigator.

## How can we pass additional props to a screen? 
Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a screenOptions prop to the navigator.

## How do we move to a new screen using React Navigation? 

```code
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
// ... other code from the previous section
```
## Is it possible to go to the same screen multiple times? 

If you run this code, you'll notice that when you tap "Go to Details... again" that it doesn't do anything! This is because we are already on the Details route. The navigate function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.

```code
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
```

## How do we really go the same screen multiple time using React Navigation?

```code
<Button
  title="Go to Details... again"
  onPress={() => navigation.push('Details')}
/>
```

## How to go back to the previous screen using React Navigation? 

The header provided by the native stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button).

## How to go back to the first screen using React Navigation? 

Another common requirement is to be able to go back multiple screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to Home so we can use navigate('Home') (not push! try that out and see the difference). Another alternative would be navigation.popToTop(), which goes back to the first screen in the stack.


## What should be the precautionary steps while using render callbacks? 

By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use React.memo or React.PureComponent for your screen components to avoid performance issues.

## What is a Router in React Navigation? 

A router is a collection of functions that decide how to handle actions and state changes in the navigator (similar to reducers in Redux apps). Normally you'd never need to interact with a router directly, unless you're writing a custom navigator.

## What is Navigation Header?

Also known as navigation header, navigation bar, app bar, and probably many other things. This is the rectangle at the top of your screen that contains the back button and the title for your screen. The entire rectangle is often referred to as the header in React Navigation.

## What should be done if someone wants to go to the next step of React navigation? 
While most users won't need to do this, if you are curious and want to learn more about how React Navigation works, it's recommended to work through the "Build your own Navigator" section.

## License

[MIT License](LICENSE)

