import React from "react";
import { Root } from "native-base";
// Components
import Home from "../Home/index";
import AuthorList from "../AuthorList/index";
import BookList from "../BookList/index";
import CartList from "../CartList/index";
import CartButton from "../buttons/CartButton";
import SignIn from "../authentication/Signin";
import Signup from "../authentication/Signup";

import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Authors"
        component={AuthorList}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen
        name="Books"
        component={BookList}
        options={({ route }) => {
          const { author } = route.params;
          return {
            title: author.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="Cart" component={CartList} />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
export default RootNavigator;
