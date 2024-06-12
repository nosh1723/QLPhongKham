import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import * as React from "react";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";
import { Formik } from "formik";
import { style } from "@/styles";
import { StatusBar } from "expo-status-bar";
import { usePathname } from 'expo-router';

export default function LoginRes() {
    const navigation = useNavigation()
    
    return (
        <Formik
            initialValues={{
                name: ""
            }}
            onSubmit={() => { }}
        >
            {({ values }) => (
                <ViewComponent style={{backgroundColor: "#fff" }}>
                    <View style={{paddingHorizontal: 20, paddingTop: 80, flexDirection: "column", justifyContent: "center"}}>
                        <Text style={{fontSize: 30, fontWeight: 600, textAlign: "center", color: "#006778"}}>Đăng nhập</Text>
                        <View style={{marginTop: 50, flexDirection: "column", gap: 24}}>
                            <View style={{paddingHorizontal: 20, flexDirection: "column", gap: 20}}>
                                <TextInput  keyboardType="number-pad" placeholder="Số điện thoại" style={[style.input, {borderRadius: 0,  borderWidth:  0, padding: 16, paddingHorizontal: 0,  fontSize: 18, borderBottomWidth: 2, paddingBottom: 8}]}/>
                                <TextInput secureTextEntry={true} placeholder="Mật khẩu" style={[style.input, {borderRadius: 0,  borderWidth: 0, padding: 16, paddingHorizontal: 0, fontSize: 18, borderBottomWidth: 2, paddingBottom: 8}]}/>
                            <TouchableOpacity style={{flexDirection: "row", justifyContent: "flex-end", marginVertical: 5}}>
                                <Text style={{fontWeight: 600, color: "#006778"}}>Quên mật khẩu?</Text>
                            </TouchableOpacity>
                            </View>
                            <CommonButton title="Đăng nhập" style={{borderRadius: 12, paddingVertical: 16, marginVertical: 20, marginTop: 12}}/>
                            <View style={{flexDirection: "row", justifyContent: "center"}}>
                                <Text style={{fontWeight: 500}}>Chưa có tài khoản? </Text> 
                                <TouchableOpacity onPress={() => navigation.navigate("Register")}><Text style={{fontWeight: 600, textDecorationLine: "underline"}}>Đăng ký ngay</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ViewComponent>
            )}
        </Formik>
    );
}