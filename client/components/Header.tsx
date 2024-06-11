import { Text } from '@rneui/base';
import React, { Children } from 'react';
import { Platform, View } from 'react-native';



const Header = ({
    style = {},
    children = <></>
    }) => {
        
    return (
        <View style={{height: "auto", width: "100%", backgroundColor: "#006778", paddingTop: Platform.OS === "ios" ? 30 : 15}}>
            {children}
        </View>
    );
};

export default Header;

