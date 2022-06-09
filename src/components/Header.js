import React from "react";
import { View, Image, StatusBar, useWindowDimensions } from "react-native";

const Header = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View>
      <StatusBar backgroundColor={"#f7f6fd"} barStyle="dark-content" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../images/dcoptima-logo.png")}
          style={{ width: width - 100, height: width - 100 }}
        />
      </View>
    </View>
  );
};

export default Header;
