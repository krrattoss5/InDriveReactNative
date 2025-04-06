import { StatusBar } from "expo-status-bar"
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { DefaultRoundedButton } from "./presentation/components/DefaultRoundedButton"
import { DefaultTextInput } from "./presentation/components/DefaultTextInput"

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../assets/city.jpg")}
      />
      <View style={styles.form}>
        <Image
          source={require("../assets/user.png")}
          style={styles.imageUser}
        />

        <Text style={styles.textLogin}>LOGIN</Text>

        <DefaultTextInput
          icon={require("../assets/email.png")}
          placeholder="Correo electrónico"
          value=""
          onChangeText={(text) => {}}
          keyBoardType="email-address"
        />

        <DefaultTextInput
          icon={require("../assets/password.png")}
          placeholder="Contraseña"
          value=""
          onChangeText={(text) => {}}
          secureTextEntry
        />

        <DefaultRoundedButton onPress={() => {}} value="INICIAR SESION" />

        <View style={styles.containerTextDontHaveAccount}>
          <View style={styles.divider} />
          <Text style={styles.textDontHaveAccount}>¿No tienes cuenta?</Text>
          <View style={styles.divider} />
        </View>

        <DefaultRoundedButton
          onPress={() => {}}
          value="REGISTRATE"
          backgroundColor="black"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})
