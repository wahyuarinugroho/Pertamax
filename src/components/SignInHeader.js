import React, { Component } from "react";
import { View, Text } from "react-native";

const SignInHeader = () => {
  return (
    <View style={{ marginTop: 40 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#373248",
          textAlign: "center",
        }}
      >
        Sign In
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
        }}
      >
        Selamat datang kembali {"\n"} di aplikasi dcoptima
      </Text>
    </View>
  );
};

export default SignInHeader;
