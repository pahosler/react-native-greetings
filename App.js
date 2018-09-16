import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AuthProvider from "./src/modules/Context/AuthProvider";
import Home from "./src/Home"
export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Home />
      </AuthProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },
  toolBar: {
    backgroundColor: "#00a5ba",
    height: 36,
    marginTop: 25
  }
});