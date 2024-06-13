import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, } from "react-native";
import * as React from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import LoginRes from "../Login/_layout";
import ViewComponent from "@/components/ViewComponent";
const OTP = (props) => {
    const navigation = useNavigation()
    return (
        <ViewComponent>
            <View style={styles.container}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                    <Text style={styles.text1}>Xác thực OTP</Text>
                    <Text style={styles.text2}>Nhập mã xác thực đã được gửi đến số <Text>000000000000</Text></Text>
                    <TextInput style={{ marginTop: 10, borderColor: '#03AED2', borderWidth: 1, fontSize: 22, borderRadius: 10, height: 50, paddingHorizontal: 15, fontWeight: '400', }} keyboardType='numeric'></TextInput>
                    <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: '300', padding: 5, marginTop: 15, }}>Không nhận được mã OTP <Text style={{ fontWeight: '500' }}>Gửi lại()</Text></Text>
                    <Text style={styles.text3} onPress={() => navigation.navigate("Login")}>Đăng nhập bằng số điện thoại khác</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'flex-end', }}>
                    <CommonButton style={{ width: "100%", borderColor: "#ddd", borderRadius: 10, padding: 15 }} title="Tiếp tục" onPress={() => navigation.navigate("Login")}></CommonButton>
                </View>
            </View>
        </ViewComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        paddingVertical: 70,
        padding: 15,
    },
    text1: {
        fontSize: 20,
        fontWeight: '500',
    },
    text2: {
        marginTop: 20,
    },
    text3: {
        marginTop: 5,
        textAlign: 'center',
    },
})

export default OTP;