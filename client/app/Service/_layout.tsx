
import React from 'react';
import {  ScrollView, Text } from 'react-native';
import ViewComponent from '@/components/ViewComponent';
import { View } from 'react-native';
import ServiceList from './ServiceList';

const Service = () => {
    return (
        <ViewComponent>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: -10}}>
                <ServiceList />
            </ScrollView>
        </ViewComponent>
    );
};

export default Service;