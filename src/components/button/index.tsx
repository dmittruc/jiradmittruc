import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

export interface IDefaultButtonProps {
  buttonText: string;
  onPress?: () => void;
}

const DefaultButton = ({buttonText, onPress}: IDefaultButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View>
        <Text>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DefaultButton;
