import React from 'react';
import {TextField} from '@material-ui/core';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Button} from 'react-native';

export default function SurveyScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {email: 'fake email', checkbox: false},
  });
  const onSubmit = data => console.log(data);
  return (
    <View>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <TextInput
            placeholder="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
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
      <Text>Test</Text>
    </View>
  );
}
