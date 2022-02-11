import React from 'react';
import { Text, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native'
import colors from '../Globals/colors';

const Sender = () => {
    return (
      <ScrollView horizontal={true} style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Solution 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Solution 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Solution 3</Text>
          </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    color: '#fff',
    maxHeight: '15%'
  },
  button: {
    alignSelf: 'center',
    marginHorizontal: 15,
    backgroundColor: colors.fg2,
    borderColor: colors.bg,
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    maxWidth: 300,
    maxHeight: '100%'
  },
  text: {
    fontSize: 15,
    color: colors.text
  }
});

export default Sender;