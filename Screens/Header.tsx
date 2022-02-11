import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderProps } from '../Globals/types';

const monkeImg = "https://pbs.twimg.com/profile_images/1363426233908948994/Nz-dm2mr_400x400.jpg";

const Header = ({ setStage = (e: number) => {} }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: monkeImg }} style={styles.img} />
      <Text style={styles.text}>Monke</Text>
      <TouchableOpacity
        style={{ alignSelf: 'center' }}
        onPress={() => setStage(0)}
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
  }
});

export default Header;