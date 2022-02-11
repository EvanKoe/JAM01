import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet } from 'react-native';
import { ConvProps, Message } from '../Globals/types';

const Bubble = (e: ListRenderItemInfo<Message>) => {
  const sender = e.item.sender;

  return (
    <View style={[ styles.bubble, sender === 'you' ? styles.you : sender === 'monke' ? styles.monke : styles.success ]}>
      <Text>{e.item.body}</Text>
    </View>
  )
};

const Conv = ({ messages = [] }: ConvProps) => {
  return (
    <FlatList
      style={styles.container}
      data={messages}
      renderItem={Bubble}
      keyExtractor={(e) => "message::" + e.body}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    marginHorizontal: 5
  },
  bubble: {
    backgroundColor: '#414141',
    padding: 10,
    marginTop: 5,
    borderRadius: 15,
  },
  you: {
    backgroundColor: '#4444cc',
    borderBottomRightRadius: 5
  },
  monke: {
    backgroundColor: '#313131',
    borderBottomLeftRadius: 5
  },
  success: {
    backgroundColor: '#bb2222',
    borderRadius: 5
  }
});

export default Conv;