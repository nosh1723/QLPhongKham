
import React, { useEffect } from 'react';
import {  ScrollView, Text } from 'react-native';
import ViewComponent from '@/components/ViewComponent';
import { View } from 'react-native';
import ServiceList from './ServiceList';
import { useStore } from '@/stores';

const Service = () => {
    const { pagingService, pageService } = useStore().service

    useEffect(() => {
        pagingService()
    }, [])

    return (
        <ViewComponent>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: -10}}>
                {pageService?.length > 0 && 
                    pageService?.map(item => (
                        <ServiceList data={item} key={"service" + item?._id}/>
                    ))
                }
            </ScrollView>
        </ViewComponent>
    );
};

export default Service;