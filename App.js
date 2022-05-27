import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";

export default function App() {
  // const isAndroid = Platform.OS === "android";
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      {/* <SafeAreaView style={{flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0}}> */}
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            style={styles.search}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <Text>Our React Native blank canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    // flex: 0.1,
    // backgroundColor: "green",
    // justifyContent: "center",
    // paddingLeft: 20
    padding: 16,
    // backgroundColor: "green",
  },
  list: {
    // flex: 0.9,
    // backgroundColor: "blue",
    // paddingLeft: 20,
    // paddingTop: 20
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
