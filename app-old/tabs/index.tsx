import { Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import appStore from "../store/AppStore";
import { useState } from "react";
import { Button } from "@rneui/themed";
function Index() {
  const [text, setText] = useState("hi");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => appStore.increment()}>{text}</Button>
      <Text>Butterere my biscuit. {appStore.value}</Text>
    </View>
  );
}

export default observer(Index);
