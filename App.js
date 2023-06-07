import React from 'react';
import ListScreen from './src/components/ListScreen';
import DetailScreen from './src/components/DetailScreen';
import AddItemsScreen from './src/components/AddItemsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';



const theme = {

  ...DefaultTheme,

  colors: {

    ...DefaultTheme.colors,

    headerBackground: '#8C60C6',

    headerText: '#fff',

  }

};


const Stack = createStackNavigator();


const App = () => {

  return (

    <NavigationContainer theme={theme}>

      <Stack.Navigator

        initialRouteName="ListScreen"

        screenOptions={{

          headerStyle: {

            backgroundColor: theme.colors.headerBackground,

          },

          headerTintColor: theme.colors.headerText,

         

        }}

      >

        <Stack.Screen options={{ headerTitle: 'Colégio Purple' }} name="ListScreen" component={ListScreen} />

        <Stack.Screen options={{ headerTitle: 'Colégio Purple' }} name="DetailScreen" component={DetailScreen} />

        <Stack.Screen options={{ headerTitle: 'Adicionar Integrantes' }} name="AddItemsScreen" component={AddItemsScreen} />


      </Stack.Navigator>

    </NavigationContainer>

  );

};
 
export default App;