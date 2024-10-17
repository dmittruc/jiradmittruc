/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const DefaultHeader = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.greetingText}>hello jiruha!</Text>
      </View>
    </SafeAreaView>
  );
};

export default DefaultHeader;
