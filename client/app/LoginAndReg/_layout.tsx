import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, } from "react-native";
import * as React from "react";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";
import { Formik } from "formik";
import { style } from "@/styles";
import { StatusBar } from "expo-status-bar";

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
                    <View style={{paddingHorizontal: 15, paddingVertical: 80, flexDirection: "column", justifyContent: "center"}}>
                        <StatusBar style="light" />
                        <Text style={{fontSize: 30, fontWeight: 600, textAlign: "center", color: "#006778"}}>Đăng nhập</Text>
                        <View>
                            <TextInput secureTextEntry={true} placeholder="Nhập mật khẩu" />
                        </View>
                    </View>
                </ViewComponent>
            )}
        </Formik>
    );
}