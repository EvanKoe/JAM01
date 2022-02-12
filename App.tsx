import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from './Globals/colors';
import messages from './Globals/messages';
import { Message } from './Globals/types';
import Conv from './Screens/Conv';
import Header from './Screens/Header';
import Sender from './Screens/Sender';

export default function App() {
  const [stage, setStage] = useState<number>(0);
  const [fullMessages, setFullMessage] = useState<Message[]>(messages);
  const [msg, setMsg] = useState<Message[]>(messages);
  const [success, setSuccess] = useState<number>(0);

  useEffect(() => {
    setMsg(fullMessages.filter(e =>  e.isDisplayed && e.stage <= stage));
    fullMessages.filter(e => e.stage === stage).map((e: Message) => {
      if (e.answerId === -1)
        setSuccess(s => s + 1);
    });
  }, [stage, fullMessages]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        setFullMessages={setFullMessage}
        setStage={setStage}
        setMessages={setMsg}
        stage={stage}
      />
      <Conv messages={msg} stage={stage} />
      <Sender
        setStage={setStage}
        stage={stage}
        messages={fullMessages}
        setMessages={setFullMessage}
        answers={fullMessages.filter(e => e.stage === stage + 1 && e.sender === 'you')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});