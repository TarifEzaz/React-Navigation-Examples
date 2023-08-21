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

## How does the back button appears in @react-navigation/native-stack?

The header provided by the native stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button).

## What will happen if goback function inside navigation prop is called from the first screen? 

The following message will be shown: 

"The action 'GO_BACK' was not handled by any navigator.
Is there any screen to go back to?
This is a development-only warning and won't be shown in production."

## License

[MIT License](LICENSE)

