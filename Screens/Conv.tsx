import React, { useEffect } from 'react';
import { View, Text, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import colors from '../Globals/colors';
import { ConvProps, Message } from '../Globals/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Bubble = (e: ListRenderItemInfo<Message>) => {
  const sender = e.item.sender;

  return (
    <View style={[
      styles.bubble, sender === 'you' ? styles.you : sender === 'monke' ? styles.monke : styles.success
    ]}>
      { sender === 'success' && (
        <MaterialCommunityIcons name="trophy" size={24} color="black" style={styles.trophy} />
      )}
      <Text style={ sender === 'monke' ? { color: '#ddd' } : {}}>{e.item.body}</Text>
    </View>
  );
};

const Conv = ({
  messages = [],
  stage = 0
}: ConvProps) => {
  let _list: FlatList | null = null;

  return (
    <FlatList
      style={styles.container}
      data={messages.filter(e => e.isDisplayed || e.stage === stage)}
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
    flexDirection: 'row',
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
    maxWidth: '80%',
    alignSelf: 'center',
    backgroundColor: '#a1b1ce',
    borderRadius: 5,
    elevation: 20
  },
  trophy: {
    marginRight: 10,
    textAlignVertical: 'center'
  }
});

export default Conv;