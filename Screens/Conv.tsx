import React, { useEffect } from 'react';
import { View, Text, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import colors from '../Globals/colors';
import { ConvProps, Message } from '../Globals/types';

const Bubble = (e: ListRenderItemInfo<Message>) => {
  const sender = e.item.sender;

  return (
    <View style={[ styles.bubble, sender === 'you' ? styles.you : sender === 'monke' ? styles.monke : styles.success ]}>
      <Text style={ sender === 'monke' ? { color: '#ddd' } : {}}>{e.item.body}</Text>
    </View>
  )
};

const Conv = ({
  messages = [],
  responses = [],
  stage = 0,
  stateMsg = []
}: ConvProps) => {
  let _list: FlatList | null = null;
  let arr = messages.filter(e => e.answerId < 0 || e.stage === stage && e.answerId === responses[stage - 1]);

  return (
    <FlatList
      style={styles.container}
      data={arr}
      ref={e => _list = e}
      onContentSizeChange={() => setTimeout(() => _list && _list.scrollToEnd(), 200)}
      renderItem={Bubble}
      keyExtractor={(e) => "message::" + e.body + (Math.random() * 40).toString()}
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
    paddingHorizontal: 20,
    marginTop: 5,
    borderRadius: 15,
    maxWidth: '70%'
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
    backgroundColor: '#a1b1ce',
    borderRadius: 3
  }
});

export default Conv;