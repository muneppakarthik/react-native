import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { fonts, ThemeColors } from '../Constants/stylesUtiles';

interface InputProps {
  placeHolder?: string,
  label: string,
  showLabel?: boolean
}

const Input = ({placeHolder = '', label, showLabel= false}:InputProps) => {
  const [name, setName] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.formControl}>
      <TextInput
        style={styles.input}
        placeholder={isFocused ? '' : placeHolder}
        value={name}
        onChangeText={newText => setName(newText)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {(isFocused || showLabel) && <Text style={styles.inputLabel}>{label}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formControl: {
    position: 'relative',
  },
  input: {
    height: 42,
    borderColor: ThemeColors.darkgray,
    color: ThemeColors.gray,
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginVertical: 20,
    fontSize: 16,
  },
  inputLabel: {
    ...fonts.fw_300,
    fontSize: 14,
    color: ThemeColors.steelblue,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
