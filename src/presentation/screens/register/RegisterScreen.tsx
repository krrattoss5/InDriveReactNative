import React, { useState } from "react"
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native"
import globalStyles from "../../../config/theme/styles"
import { DefaultTextInput } from "../../components/DefaultTextInput"
import { DefaultRoundedButton } from "../../components/DefaultRoundedButton"
import { useNavigation } from "@react-navigation/native"
import { EmailValidation } from "../../utils/EmailValidation"

export const RegisterScreen = () => {
  const navigation = useNavigation()

  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = () => {
    if (name === "") {
      Alert.alert("Error", "El nombre no puede estar vacio")
      return
    }
    if (lastname === "") {
      Alert.alert("Error", "El apellido no puede estar vacio")
      return
    }
    if (email === "") {
      Alert.alert("Error", "El email no puede estar vacio")
      return
    }
    if (phone === "") {
      Alert.alert("Error", "El numero no puede estar vacio")
      return
    }
    if (password === "") {
      Alert.alert("Error", "El password no puede estar vacio")
      return
    }
    if (confirmPassword === "") {
      Alert.alert("Error", "El password no puede estar vacio")
      return
    }
    if (confirmPassword !== password) {
      Alert.alert("Error", "Las contraseñas no coinciden")
      return
    }
    if (EmailValidation(email)) {
      Alert.alert("Error", "El email es incorrecto")
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={globalStyles.blackRegisterButton}
                source={require("../../../../assets/left_arrow.png")}
              />
            </TouchableOpacity>

            <Image
              source={require("../../../../assets/user.png")}
              style={globalStyles.imageUser}
            />

            <Text style={globalStyles.textLogin}>REGISTRO</Text>

            <DefaultTextInput
              icon={require("../../../../assets/user.png")}
              placeholder="Nombre"
              value={name}
              onChangeText={setName}
            />

            <DefaultTextInput
              icon={require("../../../../assets/user_image.png")}
              placeholder="Apellido"
              value={lastname}
              onChangeText={setLastname}
            />

            <DefaultTextInput
              icon={require("../../../../assets/email.png")}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyBoardType="email-address"
            />

            <DefaultTextInput
              icon={require("../../../../assets/phone.png")}
              placeholder="Telefono"
              keyBoardType="numeric"
              value={phone}
              onChangeText={setPhone}
            />

            <DefaultTextInput
              icon={require("../../../../assets/phone.png")}
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              keyBoardType="numeric"
              secureTextEntry
            />

            <DefaultTextInput
              icon={require("../../../../assets/phone.png")}
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              keyBoardType="numeric"
              secureTextEntry
            />

            <DefaultRoundedButton
              onPress={handleRegister}
              value="REGISTRARSE"
              backgroundColor="black"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
