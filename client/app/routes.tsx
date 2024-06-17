import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, SplashScreen, Stack } from 'expo-router'
import Header from '@/components/Header'
import AppointmentHeader from './Appointment/AppointmentHeader'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { addAuth, authSelector } from '@/redux/reducers/authReducer'
import { useFonts } from 'expo-font'

export const unstable_settings = {
    initialRouteName: "(tabs)/index",
};

const Routes = () => {

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      });

    const auth = useSelector(authSelector)
    const dispatch = useDispatch() 

    console.log('auth',auth?.token);

    const { getItem } = useAsyncStorage("auth")

    useEffect(() => {
        checkLogin()
    }, [])
    
    useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);


    const checkLogin = async () => {
        const res = await getItem()

        res && dispatch(
            addAuth(JSON.parse(res))
        )
    }
  
    if (!loaded) {
      return null;
    }

    return (
        <>
            {auth?.token ? <Redirect href="(tabs)" /> : <Redirect href="(auths)" /> } 
            <Stack >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auths)" options={{ headerShown: false }} />
                
                <Stack.Screen name="Doctor" options={{
                    title: "Thông tin bác sĩ",
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#006778", },
                    headerTintColor: "#fff",
                    headerTitleStyle: { color: "#fff", },
                }} />
    
                <Stack.Screen name="LogOTP" options={{
                    headerShown: false
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
        </>
    )
}

export default Routes