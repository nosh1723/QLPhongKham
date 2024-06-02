import React from 'react';
import { View } from 'react-native';

const ViewComponent = ({
    children= <></>,
    style = {}
}) => {
    return (
        <View style={{backgroundColor: "#f2f2f2", width: "100%", height: "100%", ...style}}>
            {children}
        </View>
    );
};

export default ViewComponent;