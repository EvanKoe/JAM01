import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from './Globals/colors';
import messages from './Globals/messages';
import { Message } from './Globals/types';
import Conv from './Screens/Conv';
import Header from './Screens/Header';
import Sender from './Screens/Sender';

export default function App() {
  const [stage, setStage] = useState<number>(0);
  const [msg, setMsg] = useState<Message[]>([]); // messages.filter(e => e.stage <= stage)
  const [success, setSuccess] = useState<number>(0);
  const [responses, setResponses] = useState<number[]>([]);

  useEffect(() => {
    setMsg(e => [...e, ...messages.filter(e => e.stage == stage || e.answerId === -2)]);
  }, [stage]);

  return (
    <SafeAreaView style={styles.container}>
      <Header setStage={setStage} stage={stage} setResponses={setResponses} setMessage={setMsg} />
      <Conv messages={msg} responses={responses} stage={stage} stateMsg={msg} />
      <Sender
        setStage={setStage}
        stage={stage}
        array={responses}
        setArray={setResponses}
        answers={messages.filter(e => e.stage === stage + 1 && e.sender === 'you')}
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