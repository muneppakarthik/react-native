import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AppContext} from './Context/AppContext';

const ContextScreen = () => {
  const context = useContext(AppContext);
  // Ensure context is not undefined before using it
  if (!context) {
    throw new Error('AppContext must be used within an AppProvider');
  }
  const {state, dispatch} = useContext(AppContext);
  return (
    <View>
      <Text>Counter: {state.counter}</Text>
      <Text>Name: {state.message}</Text>
      <Button title="Increment" onPress={() => dispatch({type: 'INCREMENT'})} />
      <Button title="Decrement" onPress={() => dispatch({type: 'DECREMENT'})} />
      <Button title="Reset" onPress={() => dispatch({type: 'RESET'})} />
      <Button title="Add Name" onPress={() => dispatch({ type: 'UPDATE_MESSAGE', payload: 'Hello, Karthik!' })} />
    </View>
  );
};

export default ContextScreen;
