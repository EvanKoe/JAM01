import React from 'react';
import { Text, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native'
import colors from '../Globals/colors';

const Sender = () => {
    return (
      <ScrollView horizontal={true} style={ styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:20}}>Solution 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:20}}>Solution 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:20}}>Solution 3</Text>
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
    marginHorizontal: 30,
    backgroundColor: colors.bg,
    borderColor: colors.bg,
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20
  }
});

export default Sender;