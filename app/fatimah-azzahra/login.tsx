import { useState } from "react";
import { View, Text, TextInput} from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
  return (
    <View>
      <Text>Hi, Welcome Baack!👋</Text>
      <Text>Hello again, you’ve been missed!</Text>

      <View>
        <Text>Email</Text>
        <TextInput>
            style={style.email}
          onChangeText={setEmail}
          value={email}
        </TextInput>
        </View>
    </View>
  );
}
