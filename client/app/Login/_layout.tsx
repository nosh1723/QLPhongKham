import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, } from "react-native";
import * as React from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";
import { useState } from "react";
export default function ComfirmPassword() {
    const [formToShow, setFormToShow] = useState("LOGIN");
    const [password, setPassword] = useState("");
    return (

        <ViewComponent>
            <View style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                padding: 10,
            }}>
                <View>
                    <Text style={styles.text1}>Chào mừng đã quay trở lại</Text>
                    <Text style={styles.text2}>000000000000</Text>
                    <TextInput style={{ marginTop: 20, borderColor: '#03AED2', borderWidth: 1, fontSize: 22, borderRadius: 10, height: 50, paddingHorizontal: 15, fontWeight: '400', }} placeholder="Nhập mật khẩu" value={password} onChangeText={val => setPassword(val)} secureTextEntry={true}>

                    </TextInput>
                </View>
                <View style={{ flex: 3, justifyContent: 'flex-start' }}>
                    <CommonButton style={{ width: "100%", borderColor: "#ddd", borderRadius: 10, marginBottom: 30, padding: 15, marginTop: 30 }} title='Đăng nhập' styleTitle={{ textAlight: "center" }}></CommonButton>
                    <Text style={styles.text3}>Quên mật khẩu?                                                           <Text style={{}}>Đổi Tài khoản</Text></Text>
                </View>
            </View>
        </ViewComponent>
    );
}
const styles = StyleSheet.create({
    text1: {
        fontSize: 16,
    },
    text2: {
        fontSize: 20,
        fontWeight: '500',
    },
    text3: {
        marginTop: 10,
    },

})