import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, } from "react-native";
import * as React from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";
import { useState } from "react";
import { CheckBox } from '@rneui/themed'
import Divider from "@/components/Divider";
export default function DeleteAccount() {
    const [selectedIndex, setIndex] = React.useState(0);
    return (
        <ViewComponent>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <Text style={{ padding: 10, marginBottom: 8 }}>Hãy cho chúng tôi biết rõ hơn lý do của bạn muốn xoá tài khoản để chúng tôi có thể khắc phục và cải thiện ứng dụng tốt hơn:</Text>
                        <Divider></Divider>
                        <CheckBox
                            title={"Không hài lòng về sản phẩm"}
                            checked={selectedIndex === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            size={20}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.checkboxText}
                        />
                        <Divider></Divider>
                        <CheckBox
                            title={"Tôi thấy bất tiện lúc sử dụng sản phẩm khi đi khám"}
                            checked={selectedIndex === 2}
                            onPress={() => setIndex(2)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            size={20}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.checkboxText}
                        />
                        <Divider></Divider>
                        <CheckBox
                            title={"Tôi không có nhu cầu sử dụng nữa"}
                            checked={selectedIndex === 3}
                            onPress={() => setIndex(3)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            size={20}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.checkboxText}
                        />
                        <Divider></Divider>
                        <CheckBox
                            title={"Tôi gặp lỗi khi sử dụng ứng dụng"}
                            checked={selectedIndex === 4}
                            onPress={() => setIndex(4)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            size={20}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.checkboxText}
                        />
                        <Divider></Divider>
                        <CheckBox
                            title={"Lý do khác (vui lòng cho biết thêm chi tiết)"}
                            checked={selectedIndex === 5}
                            onPress={() => setIndex(5)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            size={20}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.checkboxText}
                        />
                        <Divider></Divider>
                        <View style={styles.text1}>
                            <TextInput style={{ borderColor: '#d3d5d9', borderWidth: 1, borderRadius: 10, height: 130, fontWeight: '400', padding: 10, }} textAlignVertical="top" placeholder="Hãy giúp chúng tôi cải thiện dịch vụ nhé..."></TextInput>
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
    },
    checkboxContainer: {
        backgroundColor: '#f2f2f2',
        paddingTop: 8,
        paddingBottom: 8,
    },
    checkboxText: {
        fontSize: 13,
        fontWeight: '500',
    },

})
