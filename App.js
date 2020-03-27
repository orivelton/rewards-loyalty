import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useLinking from './navigation/useLinking';
import LoginScreen from './screens/LoginScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { UserContext } from './data/userContext';
import { getUser } from './data/firebase';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  // Load any resources or data that we need prior to rendering the app
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      const data = await getUser();
      console.log('data AppJS', data);
      await setData(data);
      
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });

      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen && !data) {
    return null;
  } else {
    return (
      <UserContext.Provider value={data}>
        {console.log('>>> data', data)}
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </UserContext.Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
