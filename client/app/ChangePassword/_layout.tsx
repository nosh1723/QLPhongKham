import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, } from "react-native";
import * as React from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";
import { useState } from "react";
export default function ChangePassword() {
    const navigation = useNavigation()
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [password3, setPassword3] = useState('');
    const handleSetPassword1 = () => {
        setPassword1('Nhập mật khẩu');
    };

    const handleSetPassword2 = () => {
        setPassword2('Mật khẩu mới');
    };

    const handleSetPassword3 = () => {
        setPassword3('Nhập lại mật khẩu mới');
    };

    return (
        <ViewComponent>
            <View style={styles.container}>
                < View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <View>
                        <Text style={{ color: '#000000', fontSize: 15, fontWeight: '500' }}>Mật khẩu hiện tại</Text>
                        <TextInput style={{ marginTop: 8, borderColor: '#03AED2', borderWidth: 1, fontSize: 13, borderRadius: 10, height: 50, paddingHorizontal: 15, fontWeight: '400', }} placeholder="Nhập mật khẩu của bạn hiện tại" value={password1} onChangeText={setPassword1} secureTextEntry={true}  ></TextInput>
                    </View>
                    <View>
                        <Text style={{ color: '#000000', fontSize: 15, fontWeight: '500', marginTop: 15 }}>Mật khẩu mới</Text>
                        <TextInput style={{ marginTop: 8, borderColor: '#03AED2', borderWidth: 1, fontSize: 13, borderRadius: 10, height: 50, paddingHorizontal: 15, fontWeight: '400', }} placeholder="Mật khẩu mới" value={password2} onChangeText={setPassword2} secureTextEntry={true}  ></TextInput>
                    </View>
                    <View>
                        <Text style={{ color: '#000000', fontSize: 15, fontWeight: '500', marginTop: 15 }}>Nhập lại mật khẩu mới</Text>
                        <TextInput style={{ marginTop: 8, borderColor: '#03AED2', borderWidth: 1, fontSize: 13, borderRadius: 10, height: 50, paddingHorizontal: 15, fontWeight: '400', }} placeholder="Nhập lại mật khẩu mới" value={password3} onChangeText={setPassword3} secureTextEntry={true} ></TextInput>
                    </View>
                    <View>
                        <Text style={{ marginTop: 15 }}>Mật khẩu phải có ít nhất 6 ký tự</Text>
                    </View>
                </View>
                <View style={{ flex: 3, justifyContent: 'flex-end', }}>
                    <View>
                        <CommonButton style={{}} title="Thay đổi"></CommonButton>
                    </View>
                </View>
            </View>
        </ViewComponent >
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,

    },

})