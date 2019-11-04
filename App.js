import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/views/Home';
import Transactions from './src/views/Transactions';
import Login from './src/views/Login';
import NavigationOptions from './src/components/NavigationOptions'

const navigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:  {
      headerLeft: null,
      gesturesEnabled: false,
   }
  },
  Transactions: {
    screen: Transactions,
    navigationOptions:  {
      headerLeft: null,
      gesturesEnabled: false,
   }
  },

  Login: {
    screen: Login,
    navigationOptions:  {
      headerLeft: null,
      gesturesEnabled: false,
   }
  }
},
 {
  initialRouteName: 'Home',
  transitionConfig: () => ({ 
    screenInterpolator: () => null,
    transitionSpec: {
      duration: 0,
    }
  }),
  defaultNavigationOptions: {
    headerTitle: <NavigationOptions />,
    headerStyle: {
      backgroundColor: '#8EC738',
      height: 100,
      color: '#fff'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(navigator);
