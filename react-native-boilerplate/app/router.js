// Libs
import { StackNavigator } from 'react-navigation';

// Screens
import MainScreen from './screens/mainScreen';
import InfoScreen from './screens/infoScreen';

const MainStack = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      navigationOptions: {
        headerVisible: false
      }
    }
  },
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      navigationOptions: {
        headerVisible: false
      }
    }
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Main'
});

export default MainStack;