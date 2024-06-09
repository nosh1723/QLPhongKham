import ViewComponent from '@/components/ViewComponent';
import { Button, Image } from '@rneui/themed';
import React, { useState } from 'react';
import { Platform, ScrollView, Text } from 'react-native';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CommonButton from '@/components/CommonButton';
import DateTimePicker from '@react-native-community/datetimepicker';

const DoctorIndex = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const isIos = Platform.OS === "ios"

    const onChange = (event, selectedDate) => {
        if(!isIos) {
            const currentDate = selectedDate;
            setShow(false);
            setDate(currentDate);
        }
      };
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    return (
        <ViewComponent>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{flexDirection: "row", padding: 10, backgroundColor: "#fff", marginBottom: 10}}>
                    <Image containerStyle={{ width: 100, height: 100, borderRadius: 1000, marginBottom: 10, marginRight: 15 }} source={{ uri: "https://i.pinimg.com/736x/7d/9d/ed/7d9ded7751b328b1000bcfe4c1dc7727.jpg" }} />
                    <View>
                        <Text style={{fontSize: 18}}>BS. CK2</Text>
                        <Text style={{fontSize: 20, fontWeight: 500}}>
                            Lê Thị Minh Hồng
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: "center", paddingVertical: 5}}>
                            <MaterialCommunityIcons name="check-decagram" size={16} color="#007bfc" style={{paddingRight: 3}} />
                            <Text style={{color: "#007bfc"}}>Bác sĩ</Text>
                        </View>
                        <Text><Text style={{fontWeight: 500}}>24</Text> năm kinh nghiệm</Text>
                    </View>
                </View>
                <View style={{backgroundColor: "#fff"}}>
                    <CommonButton onPress={()=> setShow(true)}>Lịch khám</CommonButton>
                    {show && 
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                        display='spinner'
                        style={{height: 120}}
                    />}
                    {isIos && show &&
                        <>
                            <CommonButton onPress={()=> setShow(false)}>Cancel</CommonButton>
                            <CommonButton onPress={()=> console.log(new Date(3373616131000).getDate())}>Comfirm</CommonButton>
                        </>
                    }
                </View>
            </ScrollView>
        </ViewComponent>
    );
};

export default DoctorIndex;