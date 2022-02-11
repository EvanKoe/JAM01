import React from 'react';
import { View, Text, FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet } from 'react-native';
import { ConvProps, Message } from '../Globals/types';

const Bubble = (e: ListRenderItemInfo<Message>) => {
  return (
    <Text>{e.item.body }</Text>
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
    backgroundColor: '#121212'
  }
});

export default Conv;