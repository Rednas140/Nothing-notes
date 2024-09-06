import { Note } from "@/components/Note";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Note type={2} title="Note title" content="Content of a note in the app"></Note>
    </View>
  );
}
