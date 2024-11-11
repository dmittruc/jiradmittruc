import {IProject} from '@interfaces/index';
import {Text} from '@react-native-material/core';
import {View} from 'react-native';
import React from 'react';
import ProjectListItem from '@components/listitems/ProjectListItem';

interface IProps {
  projects: IProject[];
  error: any;
  loading: boolean;
}

const ProjectList = ({projects, error, loading}: IProps) => {
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error loading projects</Text>;
  }

  if (projects.length === 0) {
    return <Text>No projects available</Text>;
  }
  return (
    <View>
      {projects.map((project: IProject) => (
        <View key={project.id}>
          <ProjectListItem project={project} />
        </View>
      ))}
    </View>
  );
};

export default ProjectList;
