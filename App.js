import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, TextInputBase, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text value="Numero"></Text>
      <TextInput style={styles.input_text} onChangeText={setText} value={text} />
      
      <Button title="JUGAR"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input_text:{
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    height: 40,
    width: 250,
    margin: 12,
  }

});
