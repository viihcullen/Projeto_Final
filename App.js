import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListScreen from './src/components/ListScreen';
import DetailScreen from './src/components/DetailScreen';
import AddItemsScreen from './src/components/AddItemsScreen';
import EditItemsScreen from './src/components/EditItemsScreen';
 
const RootStack = createStackNavigator(
  {
    ListScreen: {
      screen: ListScreen
    },
    DetailScreen: {
      screen: DetailScreen
    },
    AddItemsScreen: {
      screen: AddItemsScreen
    },
    EditItemsScreen: {
      screen: EditItemsScreen
    },
  },
 
  {
    initialRouteName: 'ListScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#8C60C6',
      },
      headerTintColor: '#8C60C6',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
 
const App = createAppContainer(RootStack);
 
export default App;