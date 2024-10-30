import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Button, Text, TextInput} from '@react-native-material/core';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {signUpAsyncAction} from '@actions/authAction';
import {TAppDispatch} from '@store';
import {TUserRole} from '@interfaces/general';
import {ERoutesNames} from '@interfaces/navigation/routeNames';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const dispatch = useDispatch<TAppDispatch>();
  const navigation = useNavigation<any>();

  const handleSignUp = React.useCallback(() => {
    const role: TUserRole = isAdmin ? 'ADMIN' : 'USER';
    dispatch(
      signUpAsyncAction({
        email: email,
        name: name,
        password: password,
        repeatPassword: repeatPassword,
        role: role,
        onSuccess: function (): void {
          throw new Error('Function not implemented.');
        },
      }),
    );
  }, [dispatch, email, name, password, repeatPassword, isAdmin]);

  const handleGoToSignInScreen = () => {
    navigation.navigate(ERoutesNames.SIGN_IN_SCREEN);
  };

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
      <CheckBox
        value={isAdmin}
        onValueChange={() => {
          setIsAdmin(!isAdmin);
        }}
      />
      <Button title="sign up" onPress={handleSignUp} />
      <Button title="go to sign in" onPress={handleGoToSignInScreen} />
    </SafeAreaView>
  );
};

export default SignUpScreen;
