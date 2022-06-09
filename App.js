import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginLanding from "./src/screens/LoginLanding";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginLanding">
        <Stack.Screen name="LoginLanding" component={LoginLanding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
