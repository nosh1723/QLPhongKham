import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, } from "react-native";
import * as React from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";

export default function LoginRes() {
    const navigation = useNavigation()
    return (
        <ViewComponent>
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: '500' }}>Nhập số điện thoại di động</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                    <TextInput style={{ marginTop: 20, borderColor: '#03AED2', borderWidth: 1, fontSize: 22, borderRadius: 10, height: 50, paddingHorizontal: 15, fontWeight: '400', }} placeholder="0123456789" keyboardType='numeric'></TextInput>
                    <Text style={{ marginTop: 20, fontWeight: '300' }}>Bằng việc tiếp tục, bạn đã đồng ý với các <Text style={{ fontWeight: '400', textDecorationLine: 'underline', }}>Điều khoản, điều kiện sử dụng của chúng tôi</Text> </Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                    <CommonButton style={{ width: "100%", borderColor: "#ddd", borderRadius: 10, marginBottom: 30, padding: 15 }} title='Tiếp tục' styleTitle={{ textAlight: "center" }} onPress={() => navigation.navigate("LogOTP")}></CommonButton>
                </View>
            </View>
        </ViewComponent>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 10,

    },

})