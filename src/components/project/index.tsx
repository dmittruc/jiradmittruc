import {Text, View} from 'react-native';
import DefaultButton from '../button';
import styles from './styles';
import React from 'react';

interface ProjectProps {
  title: string;
}

const Project: React.FC<ProjectProps> = ({title}) => {
  return (
    <View style={styles.allScreen}>
      <Text>{title}</Text>
      <View style={styles.buttons}>
        <DefaultButton buttonText="Edit" />
        <DefaultButton buttonText="Delete" />
      </View>
    </View>
  );
};

export default Project;
