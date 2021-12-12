import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Screen from './components/Screen';

import { FontAwesome5 } from '@expo/vector-icons'
import OptionButton from './components/OptionButton';

import axios from 'axios'

import * as Speech from 'expo-speech';




export default function App() {
  const [Quote, setQuote] = React.useState('Loading...')
  const [Author, setAuthor] = React.useState('Loading...')
  const [isLoading, setLoading] = React.useState(false)

  getRandomQuote = async () => {
    setLoading(true)
    await axios.get("https://api.quotable.io/random").then((response) => {
      setQuote(response.data.content)
      setAuthor(response.data.author)
      setLoading(false)
    });
  }

  const speakNow = () => {
    Speech.stop()
    Speech.speak(Quote + ' by ' + Author);
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <Screen style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          Quote of the day
        </Text>
        <FontAwesome5 name='quote-left' style={{ fontSize: 16, marginBottom: -12 }} color='#000' />
        <Text style={styles.textPragraph}>
          {isLoading ? 'Loading...' : Quote}
        </Text>
        <FontAwesome5 name='quote-right' style={{ fontSize: 16, textAlign: 'right', marginTop: -20, marginBottom: 20 }} color='#000' />
        <Text style={styles.authorName}> ---{isLoading ? 'Loading...' : Author}
        </Text>
        <TouchableOpacity onPress={getRandomQuote} style={styles.btnStyle}>
          <Text style={styles.btnText}>
            {isLoading ? 'Loading...' : 'New Quote'}
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <OptionButton name='volume-up' onPress={speakNow} />
          <OptionButton name='copy' onPress={() => { }} />
          <OptionButton name='twitter' onPress={() => { }} />

        </View>
      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20
  },
  textPragraph: {
    color: '#000',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 1.1,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 30

  },
  btnStyle: {
    backgroundColor: '#136a8a',
    padding: 20,
    borderRadius: 30,
    marginVertical: 20
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  authorName: {
    textAlign: 'right',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 16,
    color: '#000'
  }
});
