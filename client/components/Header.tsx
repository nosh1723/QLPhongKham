import { Text } from '@rneui/base';
import React, { Children } from 'react';
import { View } from 'react-native';



const Header = ({
    style = {},
    children = <></>
    }) => {
        
    return (
        <View style={{height: "auto", width: "100%", backgroundColor: "#006778", paddingTop: 30}}>
            {children}
        </View>
    );
};

export default Header;

