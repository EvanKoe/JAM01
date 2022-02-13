import React from 'react';
import { Text, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native'
import colors from '../Globals/colors';
import { Message, SenderProps } from '../Globals/types';

const Sender = ({
  setStage = () => {},
  stage = 0,
  answers = undefined,
  messages = [],
  setMessages = () => {}
}: SenderProps) => {
  const click = (i: number, body: string) => {
    let an: number | undefined = undefined;

    let tab: Message[] = messages.map<Message>((e: Message) => {
      if (e.body === body) {
        an = e.answerId;
        e.isDisplayed = true;
      }
      if (e.stage === stage + 2 && an !== undefined && e.answerId === an) {
        e.isDisplayed = true;
      }
      return e;
    });
    setMessages(tab);
    setStage(stage + 1);
    setTimeout(() => {
      setStage(stage + 2)
    }, 1000);
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
              onPress={() => click(i, e.body)}
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
    borderRadius: 5,
    elevation: 10,
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