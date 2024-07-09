import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ChatListScreen from './assets/screens/ChatListScree';
import ChatSettingsScreen from './assets/screens/ChatSettingsScreen';
import SettingsScreen from './assets/screens/SettingsScreen';


SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{ headerTitle: ''}}>
      <Tab.Screen name="ChatList" component={ChatListScreen} options={{
        tabBarLabel: 'Home'
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: 'Profile'
      }}/>

    </Tab.Navigator>
  )
}
export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {

    const prepare = async () => {
      try {
        await Font.loadAsync({
          "black": require("./assets/fonts//Roboto-Black.ttf"),
          "blackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
          "bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "boldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
          "italic": require("./assets/fonts/Roboto-Italic.ttf"),
          "light": require("./assets/fonts/Roboto-Light.ttf"),
          "lightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
          "medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "mediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
          "regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "thin": require("./assets/fonts/Roboto-Thin.ttf"),
          "thinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      } 
      catch (error){
        console.log(error);
      }
      finally {
        setTimeout(() => {
          setAppIsLoaded(true);
        }, 2000);
      } 
    }

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayout}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={TabNavigator} options={{
              headerShown: false
            }}/>
            <Stack.Screen name='ChatSettings' component={ChatSettingsScreen} options={{
              // gestureEnabled: true,
              headerTitle: 'Settings',
              headerBackTitle: 'Back',
              headerShadowVisible: false
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'black'
  }
});
