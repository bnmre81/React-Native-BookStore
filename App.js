import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// Styles
import { ThemeProvider } from "styled-components";
// Components
import RootNavigator from "./components/Navigation";

const theme = {
  eerie: "#171614",
  bistre: "#3a2618",
  tuscanRed: "#754043",
  grullo: "#9a8873",
  blackOlive: "#37423d",
};

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}
