import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen5 from '../screens/Screen5';
import Screen6 from '../screens/Screen6';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Screen5" component={Screen5} />
        <Drawer.Screen name="Screen6" component={Screen6} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator