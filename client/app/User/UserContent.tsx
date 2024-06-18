import Card from '@/components/Card';
import ViewContainer from '@/components/ViewContainer';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { IconRight, IconSetting } from '@/components/Icon/Icon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { Dialog } from '@rneui/themed';
import { openURL } from 'expo-linking';
import { useDispatch } from 'react-redux';
import { removeAuth } from '@/redux/reducers/authReducer';


const UserContent = () => {
    const navigation = useNavigation()
    const [isVisible, setIsVisivle] = useState(false)

    const dispatch = useDispatch()

    const toggleDialog = () => {
        setIsVisivle(!isVisible)
    }

    const LIST_OPTIONS = [
        {
            name: 'Liên hệ, hỗ trợ',
            icon: <AntDesign name="customerservice" size={24} color="#00b9d1" />,
            iconVector: "",
            onPress: () => openURL("tel:+84367937416")
        },
        {
            name: 'Cài đặt',
            icon: <IconSetting color='black'/>,
            iconVector: <IconRight color='black'/>,
            navigate: "Setting"
        },
        {
            name: 'Đăng xuất',
            icon: <Ionicons name="log-out" size={24} color="#ef4342" />,
            iconVector: "",
            onPress: () => dispatch(removeAuth({}))
        },
    ]
    

    return (
        <View>
            <Card>
                <TouchableOpacity onPress={() => navigation.navigate("UserInfo")} style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                    <View style={{paddingRight: 10}}>
                        <FontAwesome name="user-circle-o" size={50} color="#969ba7" />
                    </View>
                    <View style={{ justifyContent: "flex-start"}}>
                        <Text style={{fontWeight: 600, fontSize: 18}}>
                            Nguyễn Hồng Sơn
                        </Text>
                        <Text>
                            +84354297713
                        </Text>
                    </View>
                </TouchableOpacity>
            </Card>

            <Card style={{paddingVertical: 0, borderRadius: 14}}>
                <View>
                    {LIST_OPTIONS?.map((item, index) => {
                        const check = index === LIST_OPTIONS?.length - 1
                        return <TouchableOpacity onPress={item.navigate ? (() => navigation.navigate(item.navigate)) : 
                            item.onPress
                        } key={"userOption"+item.name} style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, borderBottomWidth: !check ? .8 : 0, borderColor: !check ? "#f2f2f2" : "", alignItems: 'center'}}>
                        <View style={{flex: .7, flexDirection: 'row', justifyContent: "flex-start"}}>{item?.icon}</View>
                        <Text style={{flex: 5}}>{item?.name}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>{item?.iconVector}</View>
                    </TouchableOpacity>
                    })}
                </View>
                
            </Card>

            <Text style={{paddingHorizontal: 10, paddingTop: 10, color: "#9eabb9", fontSize: 12}}>
                Version 3.2.6 (2024052302) - Prod - PUBLISHED
            </Text>

            <Dialog
                isVisible={isVisible}
                onBackdropPress={toggleDialog}
                >
                <Dialog.Title title="Đăng xuất khỏi tài khoản của bạn?"/>
                <Dialog.Actions>
                    <Dialog.Button
                    title="Đăng xuất"
                    color={"#f4452d"}
                    onPress={() => {
                        console.log(`Option ${isVisible} was selected!`);
                        
                    }}
                    />
                    <Dialog.Button title="Hủy" onPress={() => {}} color={"warning"}/>
                 </Dialog.Actions>
            </Dialog>
        </View>
    );
};

export default UserContent;