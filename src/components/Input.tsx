import React, {useState} from 'react';
import {StyleProp, StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import { fonts, ThemeColors } from '../Constants/stylesUtiles';

interface InputProps {
  placeHolder?: string,
  label: string,
  showLabel?: boolean,
  style?: StyleProp<ViewStyle>; 
  cotainerstyle?: StyleProp<ViewStyle>; 
}

const Input = ({placeHolder = '', label, showLabel= false, style, cotainerstyle}:InputProps) => {
  const [name, setName] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.formControl,cotainerstyle]}>
      <TextInput
        style={[styles.input, style]}
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
