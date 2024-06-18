import { StoreProvider, rootStore } from "@/stores";
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import store from '@/redux/store';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import Routes from './routes';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <Provider store={store}>
      <StoreProvider value={rootStore}>
        <ThemeProvider value={DefaultTheme}>
          <Toast position="top" bottomOffset={50} visibilityTime={2000}/>
          <Routes />
        </ThemeProvider>
      </StoreProvider>
    </Provider>
  );
}
