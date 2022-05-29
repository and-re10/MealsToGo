import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
// Screens
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
//Theme
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastrcture/theme/index";
//Fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Safe Area
import { SafeArea } from "./src/components/utility/safe-area.component";

function MapScreen() {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
