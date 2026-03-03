import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
//expo suggests to use SafeAreaProvider to avoid the web content entering the safeareas on Android because it was not working without it 
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <WebView source={{ uri: "https://www.google.com" }} style={styles.webview} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 //without it safearea will have 0 width and height so it is needed to display
  },
  webview: { 
    flex: 1//take 100% width and 100% height
    },
});
