import { ScrollView, Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import * as React from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from '@/components/CommonButton';
import { useNavigation } from "expo-router";
import ViewComponent from "@/components/ViewComponent";
import { Image } from '@rneui/themed';
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { useState } from "react";
export default function Makeappointment() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", gap: 15, paddingVertical: 10, backgroundColor: '#DCDCDC', borderRadius: 20 }}>
                    <Image containerStyle={{ width: 70, height: 70, borderRadius: 1000, marginBottom: 10, marginLeft: 10 }} source={{ uri: "https://i.pinimg.com/736x/7d/9d/ed/7d9ded7751b328b1000bcfe4c1dc7727.jpg" }} />
                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: 600, paddingBottom: 5 }}>Nguyễn Hồng Sơn</Text>
                        <Text style={{ color: "#222931" }}><Text style={{ fontWeight: 600 }}>21</Text> năm kinh nghiệm</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginTop: 10, }}>Đặt lịch khám này cho:</Text>
                    < View style={{}}>
                        <View style={{ marginTop: 15, borderRadius: 10, padding: 12, backgroundColor: '#ffffff' }}>
                            <Text>Họ và tên:    <Text style={styles.text2}>Nguyễn Khắc Lương</Text></Text>
                            <Text style={styles.text1}>Giới tính:      <Text style={styles.text2}>Nam</Text></Text>
                            <Text style={styles.text1}>Ngày sinh:   <Text style={styles.text2}>06/10/2003</Text></Text>
                            <Text style={styles.text1}>Điện thoại:  <Text style={styles.text2}>0898584206</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: '#DCDCDC', height: 43, width: '100%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, padding: 15 }}>
                            <Text style={{ marginRight: '60%', lineHeight: 15, fontWeight: '400' }}>Xem chi tiết</Text>
                            <Text style={{ lineHeight: 15, color: 'blue', }}>Sửa hồ sơ</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginTop: 10 }}>Chọn Ngày khám</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginTop: 10 }}>Chọn giờ khám</Text>
                    <ScrollView horizontal>
                        <View style={styles.table}>
                            {/* Header */}
                            <View style={styles.row}>
                                <Text style={styles.cellHeader}>Buổi sáng</Text>
                                <Text style={styles.cellHeader}>Buổi chiều</Text>
                            </View>
                            {/* Rows */}
                            <View style={styles.row}>
                                <Text style={styles.cell}>17:30 - 17:40</Text>
                                <Text style={styles.cell}>17:40 - 17:50</Text>
                                <Text style={styles.cell}>17:50 - 18:00</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.cell}>18:00 - 18:10</Text>
                                <Text style={styles.cell}>18:10 - 18:20</Text>
                                <Text style={styles.cell}>18:20 - 18:30</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.cell}>18:30 - 18:40</Text>
                                <Text style={styles.cell}>18:40 - 18:50</Text>
                                <Text style={styles.cell}>18:50 - 19:00</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.cell}>19:00 - 19:10</Text>
                                <Text style={styles.cell}>19:10 - 19:20</Text>
                                <Text style={styles.cell}>19:20 - 19:30</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View>
                        <Text style={{ fontWeight: '500', fontSize: 16, marginTop: 30 }}>Thông tin bổ sung (Không bắt buộc)</Text>
                        <Text style={{ marginTop: 8 }}>Bạn có thể cung cấp thêm các thông tin như lý do khám, triệu chứng, đơn thuốc sử dụng gần đây</Text>
                        <Text style={{ color: 'blue', height: 40, backgroundColor: '#ffffff', lineHeight: 40, textAlign: 'center', marginTop: 15, borderRadius: 10, }}>Tôi muốn gửi thêm thông tin </Text>

                    </View>
                </View>
                <View>
                    <CommonButton title="Tiếp tục" style={{ marginTop: 20 }}></CommonButton>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    text1: {
        marginTop: 7,
        fontSize: 14,

    },
    text2: {
        fontWeight: '600',
        fontSize: 15,
    },
    table: {
        borderWidth: 0,
        borderColor: '#000',
        marginTop: 10,
        backgroundColor: '#F8F8F8',

    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 9,
        minWidth: 120, // Đặt chiều rộng tối thiểu để có thể cuộn ngang nếu cần
        textAlign: 'center',
        borderRadius: 10,
        margin: 4,

    },
    cella: {
        padding: 9,
        minWidth: 120, // Đặt chiều rộng tối thiểu để có thể cuộn ngang nếu cần
        textAlign: 'center',
        margin: 4,

    },
    cellHeader: {
        borderWidth: 0,
        borderColor: '#000',
        padding: 10,
        backgroundColor: '#f1f1f1',
        minWidth: 190,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        marginBottom: 10
    },
})