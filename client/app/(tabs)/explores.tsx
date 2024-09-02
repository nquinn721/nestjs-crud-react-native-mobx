import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { createRef, useRef, useState } from "react";
import { Button, Input } from "@rneui/base";
import { observer } from "mobx-react-lite";
import appStore from "@/app/store/App.store";

function Explore() {
  const [username, setUsername] = useState("NateDogg");
  const [password, setPassword] = useState("password1");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>
      <Input placeholder="Username" onChangeText={(v) => setUsername(v)} />
      <Input placeholder="Password" onChangeText={(v) => setPassword(v)} />
      <Button onPress={() => appStore.login(username, password)}>Submit</Button>
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
export default observer(Explore);
