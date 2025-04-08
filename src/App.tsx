import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { MainStackNavigator } from "./presentation/navigator/MainStackNavigator"

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

export default App
