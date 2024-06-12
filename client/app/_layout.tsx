import { DarkTheme, DefaultTheme, ThemeProvider, } from '@react-navigation/native';
import { rootStore, StoreProvider } from "@/stores";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';
import AppointmentHeader from './Appointment/AppointmentHeader';


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
    <StoreProvider value={rootStore}>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="Doctor" options={{
            title: "Thông tin bác sĩ",
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#006778", },
            headerTintColor: "#fff",
            headerTitleStyle: { color: "#fff", },
          }} />
          <Stack.Screen name="LoginAndReg" options={{
            headerShown: false

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
              header: () => <Header><AppointmentHeader /></Header>
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
          <Stack.Screen name="MakeAppointment"
            options={{
              title: 'Đặt lịch khám',
              headerTintColor: "#ffffff",
              headerStyle: { backgroundColor: "#006778", },
              headerShadowVisible: false,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen name="MessDoctor"
            options={{
              header: () => <Header><AppointmentHeader /></Header>
            }}
          />
          <Stack.Screen name="ChangePassword"
            options={{
              title: 'Thay đổi mật khẩu',
              headerTitleStyle: { color: "#fff", },
              headerBackTitleVisible: false,
              headerTintColor: "#fff",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: "#006778", },
            }}
          />
          <Stack.Screen name="DeleteAccount"
            options={{
              title: 'Xoá tài khoản',
              headerTitleStyle: { color: "#fff", },
              headerBackTitleVisible: false,
              headerTintColor: "#fff",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: "#006778", },
            }}
          />
          <Stack.Screen name="UserInfo"
            options={{
              title: "Hồ sơ cá nhân",
              headerBackTitleVisible: false,
              headerStyle: { backgroundColor: "#006778", },
              headerTintColor: "#fff",
              headerTitleStyle: { color: "#fff", },
            }}
          />
          <Stack.Screen name="UserEdit"
            options={{
              title: "Điều chỉnh hồ sơ",
              headerBackTitleVisible: false,
              headerStyle: { backgroundColor: "#006778", },
              headerTintColor: "#fff",
              headerTitleStyle: { color: "#fff", },
            }}
          />
          <Stack.Screen name="+not-found" />

        </Stack>
      </ThemeProvider>
    </StoreProvider>
  );
}
