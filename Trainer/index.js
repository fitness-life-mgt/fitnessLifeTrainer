/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Trainer from './src/screens/RegisterScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Trainer);
