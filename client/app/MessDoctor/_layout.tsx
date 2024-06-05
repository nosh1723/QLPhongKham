
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ViewComponent from '@/components/ViewComponent';
import { View } from 'react-native';
import { Image } from '@rneui/themed';
import CommonButton from '@/components/CommonButton';

const Mess = () => {

    return (
        <ViewComponent style={{ padding: 10 }}>
            <ScrollView>
                <View style={styles.text1}>
                    <Text style={styles.cell}>Dịch vụ: Tất cả</Text>
                    <Text style={styles.cell}>Chuyên khoa : Tất cả</Text>
                </View>
                <View>
                    <Image source={{ uri: "https://images.pexels.com/photos/3845735/pexels-photo-3845735.jpeg?auto=compress&cs=tinysrgb&w=800" }} containerStyle={{ width: 400, height: 180, marginBottom: 5, borderRadius: 10 }} />
                </View>
                <View style={{ flexDirection: "row", gap: 15, paddingVertical: 10, backgroundColor: '#DCDCDC', borderRadius: 20, marginTop: 15 }}>
                    <Image containerStyle={{ width: 100, height: 100, borderRadius: 1000, marginBottom: 10, marginLeft: 10 }} source={{ uri: "https://i.pinimg.com/736x/7d/9d/ed/7d9ded7751b328b1000bcfe4c1dc7727.jpg" }} />
                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: 600, paddingBottom: 5 }}>Nguyễn Hồng Sơn</Text>
                        <Text style={{ color: "#222931" }}><Text style={{ fontWeight: 600 }}>21</Text> năm kinh nghiệm</Text>
                        <CommonButton style={{ marginLeft: 150, padding: 8, marginTop: 10, borderRadius: 15, }}>Chat Ngay</CommonButton>
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 15, paddingVertical: 10, backgroundColor: '#DCDCDC', borderRadius: 20, marginTop: 15 }}>
                    <Image containerStyle={{ width: 100, height: 100, borderRadius: 1000, marginBottom: 10, marginLeft: 10 }} source={{ uri: "https://images.pexels.com/photos/3779692/pexels-photo-3779692.jpeg?auto=compress&cs=tinysrgb&w=800" }} />
                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: 600, paddingBottom: 5 }}>Nguyễn Khắc Lương</Text>
                        <Text style={{ color: "#222931" }}><Text style={{ fontWeight: 600 }}>10</Text> năm kinh nghiệm</Text>
                        <CommonButton style={{ marginLeft: 150, padding: 8, marginTop: 10, borderRadius: 15, }}>Chat Ngay</CommonButton>
                    </View>
                </View>
            </ScrollView>
        </ViewComponent>
    );
};
export default Mess;
const styles = StyleSheet.create({
    text1: {
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#DCDCDC',
        padding: 7,
        minWidth: 40, // Đặt chiều rộng tối thiểu để có thể cuộn ngang nếu cần
        textAlign: 'center',
        borderRadius: 15,
        margin: 4,

    },
})
