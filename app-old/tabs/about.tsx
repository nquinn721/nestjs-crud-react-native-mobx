import { Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import appStore from "../store/AppStore";
import { useState } from "react";

function About() {
  const [text, setText] = useState("hi");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>About me {appStore.value}</Text>
    </View>
  );
}

export default observer(About);
