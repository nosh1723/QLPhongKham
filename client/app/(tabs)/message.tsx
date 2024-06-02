
import React from 'react';
import {  ScrollView, Text } from 'react-native';
import MessageCard from '../Message/MessageCard';
import ViewComponent from '@/components/ViewComponent';
import { View } from 'react-native';

const message = () => {
    return (
        <View style={{width: '100%', height: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: "#9eabb9"}}>Bạn chưa có tin nhắn nào!</Text>
        </View>
        // <ViewComponent style={{paddingTop: 10}}>
        //     <ScrollView showsVerticalScrollIndicator={false} >
        //         <MessageCard />
        //     </ScrollView>
        // </ViewComponent>
    );
};

export default message;