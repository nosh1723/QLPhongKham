import ViewComponent from '@/components/ViewComponent';
import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const UserInfo = () => {
    const navigation = useNavigation()
    return (
        <ViewComponent style={{backgroundColor: "#fff"}}>
            <ScrollView showsVerticalScrollIndicator>
                <View style={{padding: 15, }}>
                    <View style={[style.View , {marginBottom: 25}]}>
                        <View style={[style.flexRow, {alignItems: 'center'}]}>
                            <Octicons name="person" size={18} color="#006778" style={{paddingRight: 3}}/>                        
                            <Text style={[style.Text, {color: "#006778"}]}>Thông tin cơ bản</Text>
                        </View>
                       
                        <TouchableOpacity onPress={() => navigation.navigate("UserEdit")}><Text style={[style.Text, {color: "#006778"}]}>Điều chỉnh</Text></TouchableOpacity>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Mã bệnh nhân</Text>
                            <Text style={[style.Text, {}]}>YMI12355</Text>
                        </View>
                        <TouchableOpacity ><Ionicons name="copy-outline" size={20} color="black" /></TouchableOpacity>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Mã bảo hiểm y tế</Text>
                            <Text style={[style.Text, {}]}>Chưa cập nhật</Text>
                        </View>
                        <TouchableOpacity ><Ionicons name="copy-outline" size={20} color="black" /></TouchableOpacity>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Họ và tên</Text>
                            <Text style={[style.Text, {}]}>Chưa cập nhật</Text>
                        </View>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Số điện thoại</Text>
                            <Text style={[style.Text, {}]}>Chưa cập nhật</Text>
                        </View>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Ngày sinh</Text>
                            <Text style={[style.Text, {}]}>Chưa cập nhật</Text>
                        </View>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Giới tính</Text>
                            <Text style={[style.Text, {}]}>Chưa cập nhật</Text>
                        </View>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Địa chỉ</Text>
                            <Text style={[style.Text, {}]}>Chưa cập nhật</Text>
                        </View>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Dân tộc</Text>
                            <Text style={[style.Text, {}]}>Chưa cập nhật</Text>
                        </View>
                    </View>
                    <View style={[style.View, {marginBottom: 15}]}>
                        <View>
                            <Text style={[style.Text, {color: "#62718b"}]}>Email</Text>
                            <Text style={[style.Text, {}]}>Chưa cập nhật</Text>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </ViewComponent>
        
    );
};

export default UserInfo;

const style = StyleSheet.create({
    Text: {
        fontSize: 16,
        fontWeight: 500
    },
    flexRow: {
        flexDirection: 'row'
    },
    View: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    }
})