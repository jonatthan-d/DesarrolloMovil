import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/pages/login";
import SingUp from "./src/pages/SingUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="SingUp" options={{headerShown: false}} component={SingUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
