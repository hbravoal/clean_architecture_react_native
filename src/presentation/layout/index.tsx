import React, { type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import styles from './style';


const Layout:React.FC<PropsWithChildren<{title: string;}>> = ({children, title}) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{title}</Text>
            {children}
        </View>
    )
}

export default Layout