import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
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
          <RestaurantsScreen />
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
