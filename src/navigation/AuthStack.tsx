import { createStackNavigator } from "@react-navigation/stack";
import SignInOptions from "../features/Authentication/screens/SignInOptions";
import { AppRootParamList } from "../interfaces/AppRootParamList";

const Stack = createStackNavigator<AppRootParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInOptions"
        component={SignInOptions}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { AuthStack };
