import { NavigationContainer } from "@react-navigation/native";
import TabsNav from "./app/navigation/TabNav";

export default function App() {
  return (
    <NavigationContainer>
      {/* <RootStackNavigation /> */}
      <TabsNav />
    </NavigationContainer>
  );
}
