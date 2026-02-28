import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const App=()=> {
  return (
    <SafeAreaView style={styles.container}>
      <WebView style={styles.webview} source={{ uri:"https://www.google.com" }}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//without it safearea will have 0 width and height so it is needed to display
  },
  webview: {
    flex: 1,//take 100% width and 100% height
  },
});
export default App;