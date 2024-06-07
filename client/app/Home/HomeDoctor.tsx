import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import { IconRight } from '@/components/Icon/Icon';
import ViewContainer from '@/components/ViewContainer';
import { TouchableOpacity } from 'react-native';

const HomeDoctor = () => {
    const navigation = useNavigation()
    return (
        <ViewContainer title='Bác sĩ' onPress={() => navigation.navigate("Appointment")}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal >
                 <TouchableOpacity onPress={() => navigation.navigate("Doctor")} style={{flexDirection: "column", alignItems: 'center', paddingRight: 20}}>
                     <Image containerStyle={{width: 60, height: 60, borderRadius: 1000, marginBottom: 10}} source={{uri: "https://source.unsplash.com/random?sig="}}/>
                     <Text style={{color: "#000", fontWeight: 500}}>Bác sĩ Sơn ?!</Text>
                 </TouchableOpacity>
             </ScrollView>
        </ViewContainer>
    );
};

export default HomeDoctor;