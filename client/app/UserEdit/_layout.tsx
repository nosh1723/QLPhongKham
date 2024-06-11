import CommonButton from '@/components/CommonButton';
import { IconCalendar } from '@/components/Icon/Icon';
import ViewComponent from '@/components/ViewComponent';
import { CheckBox } from '@rneui/themed';
import { Form, Formik } from 'formik';
import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserEdit = () => {
    const [selectedIndex, setIndex] = React.useState(0);
    return (
        <Formik
            initialValues={{
                name: ""
            }}
            onSubmit={(values) => console.log(values)}
        >
            {({ values, setFieldValue, handleChange, handleSubmit }) => (
                <ViewComponent style={{backgroundColor: "#fff"}}>
                    <ScrollView>
                        <View style={{padding: 10}}>
                            <View style={{paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', }}><Text style={{fontWeight: 500, fontSize: 16}}>Họ và tên</Text><Text style={{color: "#dd524b", fontSize: 18, marginTop: -2, marginLeft: 3}}>*</Text></View>
                                <TextInput style={style.input} placeholder='Họ và tên của bạn' value={values.name} onChangeText={handleChange('name')}/>
                            </View>
                            <View style={{paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', }}><Text style={{fontWeight: 500, fontSize: 16}}>Số điện thoại</Text><Text style={{color: "#dd524b", fontSize: 18, marginTop: -2, marginLeft: 3}}>*</Text></View>
                                <TextInput style={style.input} placeholder='Nhập số điện thoại' value={values.name} onChangeText={handleChange('name')}/>
                            </View>
                            <View style={{paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', }}><Text style={{fontWeight: 500, fontSize: 16}}>Ngày sinh</Text><Text style={{color: "#dd524b", fontSize: 18, marginTop: -2, marginLeft: 3}}>*</Text></View>
                                <TouchableOpacity style={[style.input, {flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}]} >
                                    <Text style={{fontSize: 16, color: values?.name ? "" : "#bbbbbd"}}>{values?.name ? values?.name : "Ngày tháng năm sinh"}</Text>
                                    <IconCalendar size={20} color='#bbbbbd'/>
                                </TouchableOpacity>
                            </View>
                            {/* checkbox */}
                            <View style={{paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', }}><Text style={{fontWeight: 500, fontSize: 16}}>Giới tính</Text><Text style={{color: "#dd524b", fontSize: 18, marginTop: -2, marginLeft: 3}}>*</Text></View>
                                <View style={[{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', gap: 15, marginTop: 8}]} >
                                    <TouchableOpacity onPress={() => {
                                        setIndex(0)
                                    }} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: selectedIndex === 1 ? "#fff" : "#e7f1fd", padding: 10, paddingRight: 15, justifyContent: "space-between", flex: 1, borderRadius: 8, borderWidth: selectedIndex === 0 ? 2 : 1, borderColor: selectedIndex === 0 ? "#007bfc" : "#ccc"}}>
                                        <CheckBox 
                                            checked={selectedIndex === 0}
                                            onPress={() => setIndex(0)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            containerStyle={{backgroundColor: "transparent", padding: 0}}
                                            textStyle={{marginLeft: 3, color:  selectedIndex === 1 ? "#000" : "#007bfc"}}
                                            title={"Nam"}
                                        />
                                        <Ionicons name="male" size={20} color="#007bfc" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        setIndex(1)
                                    }} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: selectedIndex === 1 ? "#e7f1fd" : "#fff", padding: 10, paddingRight: 15, justifyContent: "space-between", flex: 1, borderRadius: 8, borderWidth: selectedIndex === 1 ? 2 : 1, borderColor: selectedIndex === 1 ? "#007bfc" : "#ccc"}}>
                                        <CheckBox 
                                            checked={selectedIndex === 1}
                                            onPress={() => setIndex(1)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            containerStyle={{backgroundColor: "transparent", padding: 0}}
                                            textStyle={{marginLeft: 3, color:  selectedIndex === 0 ? "#000" : "#007bfc"}}
                                            title={"Nữ"}
                                        />
                                        <Ionicons name="female" size={20} color="#df5296" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* end checkbox */}
                            
                            <View style={{paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', }}><Text style={{fontWeight: 500, fontSize: 16}}>Địa chỉ email</Text></View>
                                <TextInput style={style.input} placeholder='Địa chỉ email của bạn' value={values.name} onChangeText={handleChange('name')}/>
                            </View>
                            <View style={{paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', }}><Text style={{fontWeight: 500, fontSize: 16}}>Địa chỉ </Text></View>
                                <TextInput style={style.input} placeholder='Nhập Địa chỉ ' value={values.name} onChangeText={handleChange('name')}/>
                            </View>
                            <View style={{paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', }}><Text style={{fontWeight: 500, fontSize: 16}}>Dân tộc</Text></View>
                                <TextInput style={style.input} placeholder='Nhập Dân tộc' value={values.name} onChangeText={handleChange('name')}/>
                            </View>
                            <CommonButton onPress={handleSubmit} style={{marginTop: 10, borderRadius: 8}}>hi</CommonButton>
                        </View>
                    </ScrollView>
                </ViewComponent>
            )}
        </Formik>
    );
};

export default UserEdit;

const style = StyleSheet.create({
    input: {
        padding: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginTop: 5,
        fontSize: 16
    }
})