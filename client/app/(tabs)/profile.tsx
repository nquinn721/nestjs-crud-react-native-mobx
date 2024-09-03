import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { observer } from "mobx-react-lite";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import appStore from "../store/App.store";

function Profile() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>
      {appStore.profileData?.username ? (
        <ThemedText>{appStore.profileData?.username}</ThemedText>
      ) : (
        <ThemedText>Loading...</ThemedText>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
export default observer(Profile);
