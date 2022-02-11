import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet } from 'react-native';
import colors from '../Globals/colors';
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
    backgroundColor: colors.bg1,
    paddingHorizontal: 5
  },
  bubble: {
    backgroundColor: colors.fg,
    padding: 10,
    marginTop: 5,
    borderRadius: 15,
    maxWidth: '50%'
  },
  you: {
    backgroundColor: colors.fg1,
    borderBottomRightRadius: 3,
    marginLeft: 'auto'
  },
  monke: {
    borderBottomLeftRadius: 3
  },
  success: {
    maxWidth: '100%',
    alignItems: 'center',
    backgroundColor: '#c9f7f2',
    borderRadius: 5
  }
});

export default Conv;