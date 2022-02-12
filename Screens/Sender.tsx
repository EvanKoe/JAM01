import React, { useEffect } from 'react';
import { Text, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native'
import colors from '../Globals/colors';
import { Message, SenderProps } from '../Globals/types';

const Sender = ({
  setStage = () => {},
  stage = 0,
  answers = undefined,
  array = [],
  setArray = () => {},
}: SenderProps) => {
  const click = (i: number) => {
    setStage(stage + 1);
    let a = [...array, i];
    setArray(a);
  };

  return answers ? (
    <ScrollView
      horizontal={true}
      style={styles.container}
    >
      { answers.map((e: Message, i: number) => {
          return (
            <TouchableOpacity
              key={e.body + (Math.random() * 40).toString()}
              style={styles.button}
              onPress={() => click(i)}
            >
              <Text style={styles.text}>{e.body}</Text>
            </TouchableOpacity>
          );
        })
      }
    </ScrollView>
  ) : (
    <Text />
  )
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    color: '#fff',
    maxHeight: '15%',
    minHeight: '10%'
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