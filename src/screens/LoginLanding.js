import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import Header from "../components/Header";
import LoginRegisterButton from "../components/LoginRegisterButton";
import Title from "../components/Title";

const LoginLanding = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
      <Header />
      <Title />
      <LoginRegisterButton />
    </View>
  );
};
export default LoginLanding;
