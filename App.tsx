import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "./app/navigation/RouteStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}
