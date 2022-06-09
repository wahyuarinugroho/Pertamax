import React from "react";
import { View, Text } from "react-native";

const Title = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "#373248" }}>
        Beyond Optimizing
      </Text>
      <Text style={{ textAlign: "center" }}>
        Be Your Best Self, Strive Your Dream
      </Text>
      <Text
        style={{ marginTop: 20, textAlign: "center", marginHorizontal: 50 }}
      >
        Pengelolaan portofolio proyek dengan terstruktur dan pencapaian maximal
        di perusahan Anda.
      </Text>
    </View>
  );
};

export default Title;
