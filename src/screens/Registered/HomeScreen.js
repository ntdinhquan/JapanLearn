// src/screens/HomeScreen.js
import React from 'react';
// import BackButton from '../../components/BackButton';
import BackButton from '../../components/BackButton';
// import Background from '../../components/Background'
import BackgroundInsight from '../../components/BackgroundInsight';
import MenuInsight from '../../components/MenuInsight';
import Logo from '../../components/Logo';

import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // const courses = ['Từ vựng', 'Ngữ pháp', 'Kanji'];
  function handleTuvungPage() {
    navigation.navigate('TuvungPage');
  }
  function handleNguphapPage() {
    navigation.navigate('NguphapScreen')
  }
  function handleTestApiPage() {
    navigation.navigate('TestApiScreen')

  }
  function logout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    })
  }
  
  return (
    <BackgroundInsight>
      <Logo />

      <View style={styles.container}>
        {/* <BackButton goBack={navigation.goBack} /> */}

        <Text style={styles.title}>おかえり </Text>
        {/* <FlatList
        data={courses}
        renderItem={({ item }) => <Text style={styles.courseItem}>{item}</Text>}
        keyExtractor={(item) => item}
      /> */}
        {/* <TouchableOpacity style={styles.courseItem} onPress={handleTuvungPage}>
        <Text>Từ vựng</Text>
      </TouchableOpacity> */}
        <MenuInsight onPress={handleTuvungPage} title="Từ vựng" />
        <MenuInsight onPress={handleNguphapPage} title="Ngữ pháp" />
        <MenuInsight onPress={handleTestApiPage} title="Random Name" />
        <MenuInsight onPress={logout} title="Đăng xuất" />
        {/* 
      <TouchableOpacity style={styles.courseItem} onPress={handleNguphapPage}>
        <Text>Ngữ pháp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseItem} onPress={handleLogin}>
        <Text>Kanji</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.courseItem} onPress={logout}>
        <Text>Đăng xuất</Text>
      </TouchableOpacity> */}
      </View>
    </BackgroundInsight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // marginTop: 50,
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
    textAlign: 'center',
  },
  courseItem: {
    fontSize: 28,
    marginBottom: 10,
  },
});

export default HomeScreen;
