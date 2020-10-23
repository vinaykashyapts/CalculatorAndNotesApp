import * as React from 'react';

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* Components */
import Home from './src/Components/Home';
import Notes from './src/Components/Notes';
import Calculator from './src/Components/Calculator';

const Stack = createStackNavigator();

function App() {
  return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff'
            }}
            
          />
          <Stack.Screen
            name="Calculator"
            component={Calculator}
            options={{
              title: 'Calculator',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{
              title: 'Notes',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;