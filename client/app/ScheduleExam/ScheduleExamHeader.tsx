import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/base';
import { IconUser } from '@/components/Icon/Icon';
import InputSearch from '@/components/form-component/InputSearch';

const ScheduleExamHeader = () => {
    return (
          <View style={{paddingTop: 20}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center', paddingBottom: 10}}>
              <View >
                <Text style={{color: "#fff", fontWeight: 600, fontSize: 16}}>Lịch khám </Text>
              </View>
            </View>
            <InputSearch style={{marginVertical: 5}} placeHolder='Tìm kiếm theo mã phiếu khám...'/>
          </View>
    );
};

export default ScheduleExamHeader;