import useProjects from '@hooks/useProjects';
import {ERoutesNames} from '@interfaces/navigation/routeNames';
import {Button, Text, TextInput} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

const ProjectCreatorScreen = () => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const {loading, createProject} = useProjects();

  const navigation = useNavigation<any>();

  const goToProjects = React.useCallback(() => {
    navigation.navigate(ERoutesNames.PROJECTS_SCREEN);
  }, [navigation]);

  const createNewProject = () => {
    createProject(title, description, goToProjects);
  };

  return (
    <View>
      <Text> create new project</Text>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        keyboardType="default"
      />
      <TextInput
        label="description"
        value={description}
        onChangeText={setDescription}
        keyboardType="default"
      />
      <Button
        onPress={createNewProject}
        title={'create new project'}
        disabled={loading}
      />
    </View>
  );
};
export default ProjectCreatorScreen;
