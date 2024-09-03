import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import styles from '../../components/headers/defaultHeader/styles';

const Header = () => {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text>Header</Text>
            </View>
        </SafeAreaView>
    );
};

export default Header;
