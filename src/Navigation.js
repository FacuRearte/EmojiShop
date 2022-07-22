// Importación del navigator
import { NavigationContainer } from "@react-navigation/native";

// Importación de la función con el navigator que renderiza las pantallas
import { MyStack } from "./MyStack";

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
