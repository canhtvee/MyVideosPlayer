import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {Input} from 'antd';
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import {useForm, Controller} from 'react-hook-form';
import CheckBox from '@react-native-community/checkbox';

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {email: '', password: '', checkbox: false},
  });
  const onSubmit = data => console.log(data);
  return (
    <View style={styles.screen}>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>email is required</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 8,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text>password is invalid</Text>}

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <CheckBox
            onBlur={onBlur}
            onValueChange={onChange}
            value={value}
            tintColors={{true: 'blue', false: 'grey'}}
          />
        )}
        name="checkbox"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  formContainer: {
    padding: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    borderRadius: 4,
    paddingStart: 8,
    fontSize: 16,
  },
});
