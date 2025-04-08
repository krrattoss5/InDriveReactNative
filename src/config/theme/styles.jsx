import { StyleSheet } from "react-native"

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },
  form: {
    width: "85%",
    height: "75%",
    position: "absolute",
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 20,
    justifyContent: "center",
  },
  imageUser: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 15,
  },
  textLogin: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textDontHaveAccount: {
    color: "#fff",
    fontSize: 15,
  },
  containerTextDontHaveAccount: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  divider: {
    width: 80,
    height: 1,
    backgroundColor: "white",
  },
  blackRegisterButton: {
    position: "absolute",
    width: 25,
    height: 25,
    top: 35,
  },
})

export default globalStyles
