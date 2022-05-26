import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {

  // const isAndroid = Platform.OS === "android";
  return (
    <>
      {/* <SafeAreaView style={{flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0}}> */}
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.container}>
          <Text>Our React Native blank canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    // flex: 0.1,
    // backgroundColor: "green",
    // justifyContent: "center",
    // paddingLeft: 20
    padding: 16,
    backgroundColor: "green",
  },
  container: { 
    // flex: 0.9,
    // backgroundColor: "blue",
    // paddingLeft: 20,
    // paddingTop: 20
    flex: 1,
    backgroundColor: "blue",
    padding: 16
  }
});
