import React from "react"
import {
  Image,
  KeyboardType,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native"

interface Props {
  placeholder: string
  value: string
  onChangeText: (text: NativeSyntheticEvent<TextInputChangeEventData>) => void
  keyBoardType?: KeyboardType
  icon: any
  secureTextEntry?: boolean
}

export const DefaultTextInput = ({
  onChangeText,
  placeholder,
  value,
  keyBoardType = "default",
  icon,
  secureTextEntry = false,
}: Props) => {
  return (
    <View style={styles.containerTextInput}>
      <Image style={styles.textInputIcon} source={icon} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={"white"}
        onChange={(text) => onChangeText(text)}
        keyboardType={keyBoardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    color: "#fff",
    fontSize: 18,
    width: "90%",
    height: 50,
  },
  containerTextInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  textInputIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
})
