import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import AnimatedSplash from './components/screens/AnimatedSplashScreen';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';
import StackNavigator from "./components/navigation/StackNavigator";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UserContextProvider } from './context/UserContext';
import { useFonts } from 'expo-font';
//import InactivityDectector from './components/subcomponents/InactivityDectector'
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { APIProvider } from './context/APIContext'
// Keep the splash screen visible  while we  fetch resources
//SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    "MerriweatherBold": require("./assets/fonts/Merriweather/Merriweather-Bold.ttf"),
    "MerriweatherRegular": require("./assets/fonts/Merriweather/Merriweather-Regular.ttf"),
    "RobotoBold": require("./assets/fonts/Roboto-Bold.ttf"),
    "GreatVibes": require('./assets/fonts/Great_Vibes/GreatVibes-Regular.ttf'),
    "ZillaSlab": require('./assets/fonts/Zilla_Slab/ZillaSlab-SemiBold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/poppins/Poppins-SemiBold.ttf')
  });


  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("rgba(255,255,255,0)");
    NavigationBar.setButtonStyleAsync("dark");
  }, [])

  return (
    <UserContextProvider>
      <ActionSheetProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <APIProvider>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </APIProvider>
        </GestureHandlerRootView>
      </ActionSheetProvider>
    </UserContextProvider>


  );


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
