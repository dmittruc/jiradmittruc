import {IProject} from '@interfaces/index';
import {Text} from '@react-native-material/core';
import React from 'react';
import {View} from 'react-native';

interface IProps {
  project: IProject;
}

const ProjectListItem = ({project}: IProps) => {
  return (
    <View>
      <Text>{project.title}</Text>
      <Text>{project.description}</Text>
      <Text> Task Count: {project.tasksCount}</Text>
      <Text> Members: {project.users.length}</Text>
    </View>
  );
};

export default ProjectListItem;
