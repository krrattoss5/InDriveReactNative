import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
  value: string
  onPress: () => void
  backgroundColor?: string
}

export const DefaultRoundedButton = ({
  value,
  onPress,
  backgroundColor,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        styles.roundedButton,
        { backgroundColor: backgroundColor || "blue" },
      ]}
    >
      <Text style={styles.textButton}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  roundedButton: {
    width: "100%",
    height: 60,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 25,
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})
