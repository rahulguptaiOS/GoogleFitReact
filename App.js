import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/HomeScreen'
import StepList from './Components/StepList'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StepScreen" component={StepList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

