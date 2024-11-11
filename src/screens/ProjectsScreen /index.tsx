import {Text, View} from 'react-native';
import React from 'react';
import useProjects from '@hooks/useProjects';
import {useNavigation} from '@react-navigation/native';
import {ERoutesNames} from '@interfaces/navigation/routeNames';
import ProjectList from '@components/lists/ProjectList';
import {Button} from '@react-native-material/core';

const ProjectsScreen = () => {
  const {projects, error, loading, fetchProjects} = useProjects();

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const navigation = useNavigation<any>();

  const goToProjectCreator = React.useCallback(() => {
    navigation.navigate(ERoutesNames.CREATE_PROJECT_SCREEN);
  }, []);
  return (
    <View>
      <Button title={'go to project creator'} onPress={goToProjectCreator} />
      <Text>Projects</Text>
      <ProjectList projects={projects} error={error} loading={loading} />
    </View>
  );
};
export default ProjectsScreen;
