// src/screens/GuestScreen.js
import React from 'react';
import Background from '../../components/Background'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const basicLessons = ['Lesson 1: Basic Vocabulary', 'Lesson 2: Greetings'];

const GuestScreen = ({ navigation }) => {
  function logout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    })
  }
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Basic Lessons</Text>
        <FlatList
          data={basicLessons}
          renderItem={({ item }) => <Text style={styles.lessonItem}>{item}</Text>}
          keyExtractor={(item) => item}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={logout}>
          <Text>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  lessonItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default GuestScreen;
