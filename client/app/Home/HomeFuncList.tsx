import Card from '@/components/Card';
import { IconDrug, IconList, IconMediBag, IconMessage, IconSetting, IconStethoscope } from '@/components/Icon/Icon';
import { Button } from '@rneui/base';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LIST_FUNC = [
    {
        title: "Đặt lịch khám",
        navigate: "Appointment",
        color: "#2A629A",
        icon: <IconStethoscope color='#fff'  />,
    },
    {
        title: "Dịch vụ",
        navigate: "Service",
        color: "#C73659",
        icon: <MaterialIcons name="home-repair-service" size={24} color="white" />
    },
    {
        title: "Chat với bác sĩ",
        navigate: "MessDoctor",
        color: "#03AED2",
        icon: <IconMessage  color='#fff'/>
    },
    {
        title: "Kết quả khám",
        navigate: <></>,
        color: "#40A578",
        icon: <IconMediBag  color='#fff'/>
    },
    {
        title: "Thuốc",
        navigate: <></>,
        color: "#F97300",
        icon: <IconDrug  color='#fff'/>
    },
    {
        title: "Cài đặt",
        navigate: "Setting",
        color: "#C7B7A3",
        icon: <IconSetting  color='#fff'/>
    },
]



const HomeFuncList = () => {
    const navigation = useNavigation()
    return (
        <Card>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 5, justifyContent: 'center',}}>
                {LIST_FUNC.map(i => (
                        <TouchableOpacity  onPress={() => navigation.navigate(i.navigate)} key={"listfunc"+i.title} style={{width: "30%", height: 'auto', flexDirection: "column", alignItems: "center", padding: 10}}>
                                <View style={{ backgroundColor: i.color, width: 55, height: 55, flexDirection: "row", justifyContent: 'center', alignItems: 'center',borderRadius: 1000, shadowColor: "#000", shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.23, shadowRadius: 2.6, elevation: 4}}>
                                    <Text>{i.icon}</Text>
                                </View>
                            <Text style={{color: "#000", paddingTop: 5, textAlign: 'center'}}>{i.title}</Text>
                        </TouchableOpacity>
                ))}
            </View>
        </Card>
    );
};

export default HomeFuncList;