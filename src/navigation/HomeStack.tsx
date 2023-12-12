import { createStackNavigator } from "@react-navigation/stack";
import { AppRootParamList } from "../interfaces/AppRootParamList";

const Stack = createStackNavigator<AppRootParamList>();

export const AppStack = () => {
  return null;
  // <Stack.Navigator>
  //   <Stack.Screen
  //     name="Home"
  //     component={LoginWithPhone}
  //     options={{ headerShown: false }}
  //   />
  // </Stack.Navigator>
};
