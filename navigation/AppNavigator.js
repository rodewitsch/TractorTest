import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/old_style/HomeScreen';
import TestScreen from '../screens/old_style/TestScreen';
import HomeScreenNew from '../screens/new_style/HomeScreen';
import TestScreenNew from '../screens/new_style/TestScreen';
import ResultScreen from '../screens/new_style/ResultScreen';
import SettingsScreen from '../screens/new_style/SettingsScreen';
import { TicketsScreen } from '../screens/new_style/TicketsScreen';

export default (initialRouteName) =>
  createAppContainer(
    createStackNavigator(
      {
        HomeNew: HomeScreenNew,
        Home: HomeScreen,
        Test: TestScreen,
        TestNew: TestScreenNew,
        Result: ResultScreen,
        Settings: SettingsScreen,
        Tickets: TicketsScreen
      },
      {
        initialRouteName,
        cardStyle: { backgroundColor: global.appSettings.darkTheme ? '#101010' : '#FFFFFF' }
      }
    )
  )