/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {useState} from 'react';
import {Button, Text, TextInput} from '@react-native-material/core';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {signUpAction} from '@actions/authAction';
import {AppDispatch} from '@store';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isSelected, setSelection] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleSignUp = () => {
    dispatch(signUpAction({email, name, password, repeatPassword}));
  };

  return (
    <View style={styles.allScreen}>
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
    </View>
  );
};

export default SignUpScreen;
