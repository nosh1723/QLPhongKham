import { Image } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';

const MessageCard = () => {
    return (
        <View style={{flexDirection: 'row', flex: 1, paddingHorizontal: 10, paddingVertical: 15, alignItems: 'center'}}>
           <View style={{flex: 1}}>
                <Image containerStyle={{width: 60, height: 60, borderRadius: 1000, marginBottom: 10, }} source={{uri: "https://source.unsplash.com/random?sig="}}/>
           </View>
           <View style={{flexDirection: 'column', flex: 4}}>
                <Text>Chăm Sóc Khách Hàng</Text>
                <Text>Nguyễn Hồng Sơn</Text>
                <View style={{flexDirection: 'row', flex: 1, flexWrap: 'nowrap', paddingTop: 5}}>
                    <Text style={{flex: 2.5, opacity: .6, }} numberOfLines={1}>Bác sĩ hiện tại đang lroddfnaldkjhflsadhfliesahfiluhsdiufhs aihiusdahfklhsdlkhf kladsjhsdhf</Text>
                    <Text style={{flex: 1, paddingLeft: 5, opacity: .4}}>9 ngày trước</Text>
                </View>
           </View>
        </View>
    );
};

export default MessageCard;