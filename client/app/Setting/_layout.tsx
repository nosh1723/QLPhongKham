
import React, { useState } from 'react';
import { ScrollView, Switch, Text } from 'react-native';
import ViewComponent from '@/components/ViewComponent';
import { View } from 'react-native';
import Card from '@/components/Card';
import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import SettingList from './SettingList';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const SETTING_LIST = [
    {
        name: 'Thông báo',
        description: 'Nhận thông tin kết quả khám, cuộc gọi đến từ bác sĩ...',
        icon: <MaterialCommunityIcons name="bell" size={28} color="#da5597" />,
        iconRedirect: false,

    },
    {
        name: 'Thay đổi mật khẩu',
        description: false,
        icon: <MaterialIcons name="change-circle" size={28} color="#e87b35" />,
        iconRedirect: <AntDesign name="right" size={24} color="#bec4d0" style={{ marginRight: 5 }} />,
        navigate: "ChangePassword",
    },
    {
        name: 'Yêu cầu hủy tài khoản',
        description: false,
        icon: <FontAwesome6 name="user-minus" size={20} color="#dc5248" />,
        iconRedirect: <AntDesign name="right" size={24} color="#bec4d0" style={{ marginRight: 5 }} />,
        navigate: "DeleteAccount",

    },
]

const Setting = () => {
    const navigation = useNavigation()
    return (

        <ViewComponent>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: -10, }}>
                <Card style={{ borderRadius: 10, marginTop: 15, }}>
                    <View>
                        {SETTING_LIST.map((i, index, arr) => {
                            const border = arr[arr.length - 1].name === i.name
                            return <SettingList data={i} key={"setting" + i.name} border={border} />
                        })}
                    </View>
                </Card>
            </ScrollView>
        </ViewComponent>
    );
};

export default Setting;