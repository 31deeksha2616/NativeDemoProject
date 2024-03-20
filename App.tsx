// In App.js in a new project

import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import ContactDetails from './ContactDetails';
import HomeVertical from './HomeVertical';

// function HomeScreen() {
  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Text>Home Screen</Text>
  //   </View>
  // );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactDetails} />
        <Stack.Screen name="HomeVertical" component={HomeVertical} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;