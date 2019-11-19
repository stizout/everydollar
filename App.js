import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/views/Home';
import Login from './src/views/Login';
import Transactions from './src/views/Transactions';
import AddTransaction from './src/views/AddTransaction';
import NavigationOptions from './src/components/NavigationOptions'
import CategoryView from './src/views/CategoryView';
import { Provider } from 'react-redux';
import store from './src/ducks/store';


const RootStack = createStackNavigator({
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
  },
  CategoryView: {
    screen: CategoryView,
    navigationOptions:  {
      headerLeft: null,
      gesturesEnabled: false,
   }
  },
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

let Navigator = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}