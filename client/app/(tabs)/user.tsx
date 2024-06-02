import ViewComponent from '@/components/ViewComponent';
import React from 'react';
import { ScrollView, View } from 'react-native';
import UserContent from '../User/UserContent';

const user = () => {
    return (
        <ViewComponent style={{paddingVertical: 50}}>
            <ScrollView>
                <UserContent/>
            </ScrollView>
        </ViewComponent>
    );
};

export default user;