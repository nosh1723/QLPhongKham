import { DarkTheme, DefaultTheme, ThemeProvider, } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';
import AppointmentHeader from './Appointment/AppointmentHeader';
import InputSearch from '@/components/form-component/InputSearch';
import SettingHeader from './Setting/SettingHeader';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Doctor" options={{}} />
        <Stack.Screen name="LoginAndReg" options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: "#000",
          headerShadowVisible: false,

        }} />
        <Stack.Screen name="LogOTP" options={{
          headerShown: false
        }} />

        <Stack.Screen name="Login" options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: "#000",
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="Service" options={{
          title: 'Dịch vụ',
          headerTitleStyle: { color: "#fff", },
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#006778", },
        }} />
        <Stack.Screen name="Appointment" 
          options={{
            header: () => <Header><AppointmentHeader/></Header>
          }} 
        />
        <Stack.Screen name="Setting" 
          options={{
            title: 'Cài đặt',
            headerTitleStyle: { color: "#fff", },
            headerBackTitleVisible: false,
            headerTintColor: "#fff",
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#006778", },
          }} 
        />
        <Stack.Screen name="+not-found" />

      </Stack>
    </ThemeProvider>
  );
}
