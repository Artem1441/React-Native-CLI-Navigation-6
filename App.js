import { SafeAreaView } from "react-native";
import StackNavigator from "./src/navigation/StackNavigator";
import BottomTabsNavigator from "./src/navigation/BottomTabsNavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import Navigator from "./src/navigation/Navigator";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StackNavigator /> */}
      {/* <BottomTabsNavigator /> */}
      {/* <DrawerNavigator /> */}
      <Navigator />
    </SafeAreaView>
  )
}

export default App