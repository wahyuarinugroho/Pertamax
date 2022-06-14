import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const Login = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
      <View style={{ marginTop: 20 }}>
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
            color: "#373248",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Selamat datang kembali
        </Text>
      </View>
    </View>
  );
};

export default Login;
