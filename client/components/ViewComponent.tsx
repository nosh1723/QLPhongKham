import React from 'react';
import { SafeAreaView, View } from 'react-native';

const ViewComponent = ({
    children= <></>,
    style = {}
}) => {
    return (
        <SafeAreaView style={{backgroundColor: "#f2f2f2", width: "100%", height: "100%", ...style}}>
            {children}
        </SafeAreaView>
    );
};

export default ViewComponent;