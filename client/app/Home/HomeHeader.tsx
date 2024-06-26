import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/base';
import { IconUser } from '@/components/Icon/Icon';
import InputSearch from '@/components/form-component/InputSearch';

const HomeHeader = (props) => {
    return (
          <View style={{paddingTop: 20}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', gap: 15}}>
              <IconUser color="#fff"/>
              <View >
                <Text style={{color: "#fff"}}>Chào mừng </Text>
              </View>
            </View>
            <InputSearch style={{marginVertical: 5}}/>
          </View>
    );
};

export default HomeHeader;