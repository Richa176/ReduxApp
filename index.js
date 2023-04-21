/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/home';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './Redux/store/configureStore';

const Stack = createNativeStackNavigator();
const RNRedux = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='App'>
                    <Stack.Screen name='App' component={App} />
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => RNRedux);
