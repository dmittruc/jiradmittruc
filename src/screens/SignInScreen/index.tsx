import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from '@react-native-material/core';
import {useDispatch} from 'react-redux';
import {signInAsyncAction} from '@actions/authAction';
import {TAppDispatch} from '@store';
import styles from './styles';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<TAppDispatch>();

  const handleSignIn = React.useCallback(() => {
    dispatch(
      signInAsyncAction({
        email: email,
        password: password,
      }),
    );
  }, [dispatch, email, password]);

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
        label="password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;
