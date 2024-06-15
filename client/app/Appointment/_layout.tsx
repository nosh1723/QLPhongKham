
import React from 'react';
import {  ScrollView, Text } from 'react-native';
import ViewComponent from '@/components/ViewComponent';
import { View } from 'react-native';
import ViewContainer from '@/components/ViewContainer';
import CommonButton from '@/components/CommonButton';
import { Image } from '@rneui/themed';
import AppointmentList from './AppointmentList';

const AppointmentIndex = () => {
    return (
        <ViewComponent style={{paddingTop: 10, marginVertical: 0}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: -10}}>
                    <AppointmentList/>
            </ScrollView>
        </ViewComponent>
    );
};

export default AppointmentIndex;