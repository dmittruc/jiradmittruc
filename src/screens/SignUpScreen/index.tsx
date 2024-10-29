import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Button, Text, TextInput} from '@react-native-material/core';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {signUpAsyncAction} from '@actions/authAction';
import {AppDispatch} from '@store';
import {EUserRole} from '@interfaces/general';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isSelected, setSelection] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleSignUp = React.useCallback(() => {
    const role = isSelected ? EUserRole.ADMIN : EUserRole.USER;
    dispatch(signUpAsyncAction({email, name, password, repeatPassword, role}));
  }, [dispatch, email, name, password, repeatPassword, isSelected]);

  return (
    <SafeAreaView style={styles.allScreen}>
      <TextInput
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        label="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        label="password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        label="password"
        style={styles.input}
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry={true}
      />
      <Text>Sign up as Admin</Text>
      <CheckBox value={isSelected} onValueChange={setSelection} />
      <Button title="sign up" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

export default SignUpScreen;
