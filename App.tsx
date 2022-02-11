import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
  const [msg, setMsg] = useState<Message[]>(messages.filter(e => e.stage >= stage));

  return (
    <SafeAreaView style={styles.container}>
      <Header setStage={setStage} />
      <Conv messages={msg} />
      <Sender />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});