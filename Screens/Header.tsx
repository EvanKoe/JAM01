import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderProps, Message } from '../Globals/types';
import messages from '../Globals/messages';

const monkeImg = "https://pbs.twimg.com/profile_images/1363426233908948994/Nz-dm2mr_400x400.jpg";
const api_url ="https://zenquotes.io/api/quotes/";

const Header = ({
  setFullMessages = () => {},
  setStage = () => {},
  setMessages = () => {},
  stage = 0
}: HeaderProps) => {
  const [quotes, setQuotes] = useState<any[] | undefined>(undefined);

  const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "Do you want to restart the conversation from zero ? Quotes will stay anyway.",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => {
            setFullMessages(messages);
            setMessages(messages);
            setStage(0);
          }
        }
      ]
    );
  };

  const toastMotivational = () => {
    if (!quotes)
      return
    let a = Math.random() * quotes.length | 0;
    let o: Message = {
      answerId: -2,
      isDisplayed: true,
      body: quotes[a].q,
      sender: 'monke',
      stage: stage + 1
    };
    setFullMessages(e => [...e, o]);
  }

  useEffect(() => {
    const getapi = async (url: string) => {
      const response = await fetch(url);
      const res = await response.json();
      setQuotes([...res]);
    };

    getapi(api_url);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toastMotivational}>
        <Image source={{ uri: monkeImg }} style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.text}>Monke</Text>
      <TouchableOpacity
        style={{ alignSelf: 'center' }}
        onPress={showConfirmDialog}
      >
        <Ionicons name="reload" size={24} color="#ddd" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  text: {
    color: '#ddd',
    fontSize: 22,
    textAlignVertical: 'center',
    marginLeft: 10,
    marginRight: 'auto'
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  areUSure: {
    position: 'absolute',
    top: '40%',
    height: '10%',
    width: '50%'
  }
});

export default Header;