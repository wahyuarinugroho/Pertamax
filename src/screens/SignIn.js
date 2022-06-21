import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import SignInHeader from "../components/SignInHeader";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
      <SignInHeader />
      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: "#ffffff",
          marginTop: 20,
          borderRadius: 7,
          elevation: 5,
          paddingLeft: 10,
          height: 50,
        }}
        placeholder="masukkan email anda"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: "#ffffff",
          marginTop: 20,
          borderRadius: 7,
          elevation: 2,
          paddingLeft: 10,
          height: 50,
        }}
        placeholder="masukkan password anda"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          marginTop: 20,
          marginRight: 20,
        }}
      >
        <Text style={{ textAlign: "right", fontWeight: "bold" }}>
          Lupa Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 40,
          backgroundColor: "#03a9f4",
          paddingVertical: 15,
          marginHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 9,
          elevation: 2,
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: "bold" }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 40 }}>
        Atau Login dengan
      </Text>
      <View
        style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 40 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ffffff",
            flex: 1,
            paddingVertical: 10,
            borderRadius: 9,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            elevation: 2,
          }}
        >
          <Image
            source={require("../images/google-logo.png")}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ffffff",
            flex: 1,
            paddingVertical: 10,
            borderRadius: 9,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            elevation: 2,
          }}
        >
          <Image
            source={require("../images/facebook-logo.png")}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ffffff",
            flex: 1,
            paddingVertical: 10,
            borderRadius: 9,
            justifyContent: "center",
            alignItems: "center",
            elevation: 2,
          }}
        >
          <Image
            source={require("../images/apple-logo.png")}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          marginRight: 20,
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Bukan Member?,{" "}
          <Text style={{ color: "#03a9f4" }}>Registrasi Disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
