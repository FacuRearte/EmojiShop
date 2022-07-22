import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importación de componentes para renderizar
import Home from "./screens/Home";
import Add from "./screens/Add";

// Crear el stack navigator
const Stack = createNativeStackNavigator();

// Renderiza las screens

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EmojiShop" component={Home} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  );
}
