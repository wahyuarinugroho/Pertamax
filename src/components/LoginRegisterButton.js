import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

const LoginRegisterButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          backgroundColor: "#f1f3ff",
          marginHorizontal: 20,
          borderRadius: 15,
          borderWidth: 2,
          borderColor: "#ffffff",
          elevation: 2,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
            paddingVertical: 20,
            borderRadius: 15,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f1f3ff",
            paddingVertical: 20,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={{ fontWeight: "bold" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginRegisterButton;
