
import React from 'react';
import {  ScrollView, Text } from 'react-native';
import ScheduleExamCard from '../ScheduleExam/ScheduleExamCard';
import { View } from 'react-native';

const ScheduleExamIndex = () => {
    return (
        <View style={{width: '100%', height: "100%", alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{fontSize: 20, color: "#9eabb9"}}>Bạn chưa có lịch khám nào!</Text>
        </View>
        // <ScrollView showsVerticalScrollIndicator={false}>
        //     <ScheduleExamCard />
        // </ScrollView>
    );
};

export default ScheduleExamIndex;