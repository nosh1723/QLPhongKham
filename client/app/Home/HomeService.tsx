import CommonButton from '@/components/CommonButton';
import ViewContainer from '@/components/ViewContainer';
import { useNavigation } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const HomeService = () => {
    const navigation = useNavigation()
    return (
        <ViewContainer title='Dịch vụ' noIcon={true}>
            <CommonButton style={{width: "100%", flexDirection: "column", alignItems: "start", borderBottomWidth: 1, borderColor: "#ddd", paddingBottom: 10, marginBottom: 10 }} color='transparent' onPress={() => navigation.navigate("Appointment")}>
                <Text style={{fontWeight: 600, fontSize: 14, paddingBottom: 5, }}>Chỉnh nha</Text>
                <Text style={{fontSize: 12, paddingBottom: 10}}>Chỉnh nha tái khám định kì hoặc gắn mắc cài</Text>
                <Text style={{fontSize: 12, color: "#006778"}}>Đặt lịch</Text>
            </CommonButton>
            <CommonButton style={{width: "100%", flexDirection: "column", alignItems: "start", paddingBottom: 10, marginBottom: 10 }} color='transparent'>
                <Text style={{fontWeight: 600, fontSize: 14, paddingBottom: 5, }}>Điều trị tổng quát</Text>
                <Text style={{fontSize: 12, paddingBottom: 10}}>Điều trị hàn răng, chữa tủy, nhổ răng khôn, nhổ răng ngầm, chữa viêm lợi, nạo nha chu, ...</Text>
                <Text style={{fontSize: 12, color: "#006778"}}>Đặt lịch</Text>
            </CommonButton>
            <CommonButton title='Xem tất cả các dịch vụ'  style={{width: "100%", borderRadius: 100 }}  onPress={() => navigation.navigate("Service")}/>
        </ViewContainer>
    );
};

export default HomeService;