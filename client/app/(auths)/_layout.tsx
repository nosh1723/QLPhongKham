
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

export default function Auth() {

  return (
    <Stack >
        <Stack.Screen name="index" options={{
            headerShown: false,
        }} />
        <Stack.Screen name="register" options={{
            headerShown: false,
        }} />
    </Stack>
  );
}
