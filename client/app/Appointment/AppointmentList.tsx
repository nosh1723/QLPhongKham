import CommonButton from '@/components/CommonButton';
import { Image } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from "expo-router";
const AppointmentList = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'column', backgroundColor: "#fff", padding: 10, marginBottom: 10 }}>
            <View style={{ flexDirection: "row", gap: 15, paddingVertical: 10 }}>
                <Image containerStyle={{ width: 100, height: 100, borderRadius: 1000, marginBottom: 10 }} source={{ uri: "https://i.pinimg.com/736x/7d/9d/ed/7d9ded7751b328b1000bcfe4c1dc7727.jpg" }} />
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 600, paddingBottom: 5 }}>Nguyễn Hồng Sơn</Text>
                    <Text style={{ color: "#222931" }}><Text style={{ fontWeight: 600 }}>21</Text> năm kinh nghiệm</Text>
                </View>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "flex-end", borderTopWidth: .8, borderColor: "#ddd", paddingTop: 5 }}>
                <CommonButton title='Đặt lịch ngay' style={{ paddingHorizontal: 15, borderRadius: 8 }} onPress={() => navigation.navigate("MakeAppointment")} />
            </View>
        </View>
    );
};

export default AppointmentList;