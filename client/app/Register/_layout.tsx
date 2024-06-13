import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Platform } from "react-native";
import { useEffect, useRef, useState } from 'react';
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";
import { Formik } from "formik";
import {style} from "@/styles"
import { Ionicons } from '@expo/vector-icons';
import { firebaseConfig } from "@/firebase-config";
import firebase from 'firebase/compat/app'
import {FirebaseRecaptchaVerifier, FirebaseRecaptchaBanner, FirebaseRecaptcha} from 'expo-firebase-recaptcha'

export default function LoginRes() {
    const navigation = useNavigation()
    const [openRecaptcha, setOpenRecaptcha] = useState(false)
    const isIos = Platform.OS === "ios"
    const ref = useRef(null)

  
    return (
        <Formik
            initialValues={{
                name: ""
            }}
            onSubmit={() => { }}
        >
            {({ values }) => (
                <ViewComponent style={{backgroundColor: "#fff" }}>
                    <View style={{width: "100%", height: "100%", position: "relative"}}>
                        <View style={{paddingHorizontal: 20, paddingTop: 80, flexDirection: "column", justifyContent: "center"}}>
                            <Text style={{fontSize: 30, fontWeight: 600, textAlign: "center", color: "#006778"}}>Đăng ký</Text>
                            <View style={{marginTop: 50, flexDirection: "column", gap: 24}}>
                                <View style={{paddingHorizontal: 20, flexDirection: "column", gap: 20}}>
                                    <TextInput  keyboardType="number-pad" placeholder="Số điện thoại" style={[style.input, {borderRadius: 0,  borderWidth:  0, padding: 16, paddingHorizontal: 0,  fontSize: 18, borderBottomWidth: 2, paddingBottom: 8}]}/>
                                    <View style={[style.input, {borderRadius: 0,  borderWidth:  0, padding: 16, paddingHorizontal: 0,  borderBottomWidth: 2, paddingBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]}>
                                        <TextInput keyboardType="number-pad" placeholder="Nhập OTP của bạn" style={{ fontSize: 18,}}/>
                                        <TouchableOpacity style={{ borderLeftWidth: 1.5, borderColor: "#ccc"}} onPress={() => {
                                            setOpenRecaptcha(true)
                                        }}>
                                            <Text style={{ fontSize: 18, color: "#006778", fontWeight: 500, textDecorationLine: "underline", paddingHorizontal: 10, paddingVertical: 3}}>Gửi</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TextInput secureTextEntry={true} placeholder="Mật khẩu" style={[style.input, {borderRadius: 0,  borderWidth: 0, padding: 16, paddingHorizontal: 0, fontSize: 18, borderBottomWidth: 2, paddingBottom: 8}]}/>
                                    <TextInput secureTextEntry={true} placeholder="Nhập lại mật khẩu" style={[style.input, {borderRadius: 0,  borderWidth: 0, padding: 16, paddingHorizontal: 0, fontSize: 18, borderBottomWidth: 2, paddingBottom: 8}]}/>
                                </View>
                                <CommonButton title="Đăng ký" style={{borderRadius: 12, paddingVertical: 16, marginVertical: 20, marginTop: 12}}/>
                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Text style={{fontWeight: 500}}>Đã có tài khoản? </Text> 
                                    <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={{fontWeight: 600, textDecorationLine: "underline"}}>Đăng nhập</Text></TouchableOpacity>
                                </View>
                            </View>



                        </View>
                        <View style={{position: 'absolute', width: "100%", height: "100%", backgroundColor: "rgba(255, 255, 255, .8)", padding: 15, flexDirection: "column", justifyContent: "space-between", marginTop: isIos ? 0 : 30, display: openRecaptcha ? "flex" : "none"}}>
                            <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                                <TouchableOpacity onPress={() => setOpenRecaptcha(false)}><Ionicons name="close" size={24} color="black" /></TouchableOpacity>
                                <Text style={{fontSize: 20, marginTop: -2}}>Xác thực yêu cầu</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "center"}}>
                                
                            </View>
                            <View style={{height: 100}}></View>
                        </View>
                    </View>
                </ViewComponent>
            )}
        </Formik>
    );
}