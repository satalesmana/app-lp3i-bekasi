import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
interface Props {
  onPress: () => void;
  label: string;
}

export const ButtonPrimary = (props: Props) => {
  return (
    <TouchableOpacity style={styles.btnPrimary} onPress={props.onPress}>
      <Text style={styles.btnLabel}>{props.label}</Text>
      <Image source={require("../assets/images/chevron-right.png")} />
    </TouchableOpacity>
  );
};

export const ButtonSecondary = (props: Props) => {
  return (
    <TouchableOpacity style={styles.btnSecondary} onPress={props.onPress}>
      <Text style={styles.btnLabel}>{props.label}</Text>
      <Image source={require("../assets/images/chevron-right.png")} />
    </TouchableOpacity>
  );
};

export const ButtonCreate = (props: Props) => {
  return (
    <TouchableOpacity style={styles.btnCreate} onPress={props.onPress}>
      <Text style={styles.btnCreateText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export const ButtonSuccess = (props: Props) => {
  return (
    <TouchableOpacity style={styles.btnSuccess} onPress={props.onPress}>
      <Text style={styles.btnLabel}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnPrimary: {
    marginTop: 10,
    backgroundColor: "#FF3951",
    height: 50,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  btnSuccess: {
    marginTop: 10,
    backgroundColor: "#4aff39ff",
    height: 50,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  btnSecondary: {
    marginTop: 10,
    backgroundColor: "#36079bff",
    height: 50,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  btnLabel: {
    color: "#FCFCFC",
    fontSize: 20,
  },

  btnCreate: {
    backgroundColor: "#27AE60",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  btnCreateText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
