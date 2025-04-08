import { createStackNavigator } from "@react-navigation/stack"
import { LoginScreen } from "../screens/login/LoginScreen"
import { RegisterScreen } from "../screens/register/RegisterScreen"

export type RootStackParamList = {
  LoginScreen: undefined
  RegisterScreen: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  )
}
