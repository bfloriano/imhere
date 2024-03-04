import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 28,
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 48,
  },
  bodyText: {
    color: "#6b6b6b",
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#1f1e25",
    height: 48,
    color: "#fff",
    padding: 16,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 28,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  listEmptyComponent: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
});
