import React, { useState } from "react"
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native"
import { DefaultTextInput } from "../../components/DefaultTextInput"
import { DefaultRoundedButton } from "../../components/DefaultRoundedButton"
import { RootStackParamList } from "../../navigator/MainStackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import globalStyles from "../../../config/theme/styles"
import { EmailValidation } from "../../utils/EmailValidation"

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}

export const LoginScreen = ({ navigation, route }: Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Los datos son obligatorios")
      return
    }

    if (EmailValidation(email)) {
      Alert.alert("El email es invalido")
      return
    }
  }

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={globalStyles.container}>
          <Image
            style={globalStyles.imageBackground}
            source={require("../../../../assets/city.jpg")}
          />
          <View style={globalStyles.form}>
            <Image
              source={require("../../../../assets/user.png")}
              style={globalStyles.imageUser}
            />

            <Text style={globalStyles.textLogin}>LOGIN</Text>

            <DefaultTextInput
              icon={require("../../../../assets/email.png")}
              placeholder="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              keyBoardType="email-address"
            />

            <DefaultTextInput
              icon={require("../../../../assets/password.png")}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <DefaultRoundedButton
              onPress={handleLogin}
              value="INICIAR SESION"
            />

            <View style={globalStyles.containerTextDontHaveAccount}>
              <View style={globalStyles.divider} />
              <Text style={globalStyles.textDontHaveAccount}>
                ¿No tienes cuenta?
              </Text>
              <View style={globalStyles.divider} />
            </View>

            <DefaultRoundedButton
              onPress={() => navigation.navigate("RegisterScreen")}
              value="REGISTRATE"
              backgroundColor="black"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
