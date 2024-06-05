import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, } from "react-native";
import * as React from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";
import Divider from "@/components/Divider";
import { useState } from "react";
export default function DeleteAccount() {

    return (
        <ViewComponent>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <Text style={{ padding: 10 }}>Hãy cho chúng tôi biết rõ hơn lý do của bạn muốn xoá tài khoản để chúng tôi có thể khắc phục và cải thiện ứng dụng tốt hơn:</Text>
                        <Divider></Divider>
                        <Text style={styles.text1}>Không hài lòng về sản phẩm</Text>
                        <Divider></Divider>
                        <Text style={styles.text1}>Tôi thấy bất tiện lúc sản phẩm khi đi khám</Text>
                        <Divider></Divider>
                        <Text style={styles.text1}>Tôi không có nhu cầu sử dụng nữa</Text>
                        <Divider></Divider>
                        <Text style={styles.text1}>Tôi gặp lỗi khi sử dụng ứng dụng</Text>
                        <Divider></Divider>
                        <Text style={styles.text1}>Lý do khác (Vui lòng cho biết thêm chi tiết)</Text>
                        <Divider></Divider>
                        <View style={styles.text1}>
                            <TextInput style={{ borderColor: '#03AED2', borderWidth: 1, borderRadius: 10, height: 130, fontWeight: '400', padding: 10, }} textAlignVertical="top" placeholder="Hãy giúp chúng tôi cải thiện dịch vụ nhé..."></TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <CommonButton style={{ width: "80%", borderRadius: 10, marginBottom: 30, padding: 10, marginTop: 150, margin: 4 }} title="Tiếp tục xoá"></CommonButton>
                        <CommonButton style={{ backgroundColor: '#1E90FF', width: "73%", borderRadius: 10, marginBottom: 30, padding: 10, marginTop: 150, margin: 2, }} title="Hỗ trợ trực tuyến"></CommonButton>
                    </View>
                </View>
            </ScrollView>
        </ViewComponent >
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    text1: {
        padding: 10,
        fontSize: 12,
    }

})
