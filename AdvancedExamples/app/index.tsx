import React from "react";
import { View, StyleSheet } from "react-native";
import QuestionSwiper from "../components/QuestionSwiper";

export default function Index() {
  return (
    <View style={styles.container}>
      <QuestionSwiper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DAD7CD", // coolors color scheme
    alignContent: 'center'
  },
});
