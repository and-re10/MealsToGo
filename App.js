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
//Icons
import Ionicons from "@expo/vector-icons/Ionicons";
// Providers
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

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

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

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
          <LocationContextProvider>
            <RestaurantContextProvider>
              <NavigationContainer>
                <Tab.Navigator screenOptions={createScreenOptions}>
                  <Tab.Screen
                    name="Restaurants"
                    component={RestaurantsScreen}
                  />
                  <Tab.Screen name="Map" component={MapScreen} />
                  <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
              </NavigationContainer>
            </RestaurantContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
