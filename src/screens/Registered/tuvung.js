// src/screens/Tuvung.js
import React from 'react';
import BackButton from '../../components/BackButton';
import Background from '../../components/Background';
import BackgroundInsight from '../../components/BackgroundInsight';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
    { kanji: "こんにちは", romaji: "konnichiwa", meaning: "Xin chào" },
    { kanji: "ありがとう", romaji: "arigatou", meaning: "Cảm ơn" },
    { kanji: "さようなら", romaji: "sayounara", meaning: "Tạm biệt" },
    { kanji: "すみません", romaji: "sumimasen", meaning: "Xin lỗi / Xin phép" },
    { kanji: "はい", romaji: "hai", meaning: "Vâng / Có" },
    { kanji: "いいえ", romaji: "iie", meaning: "Không" },
    { kanji: "おはようございます", romaji: "ohayou gozaimasu", meaning: "Chào buổi sáng" },
    { kanji: "こんばんは", romaji: "konbanwa", meaning: "Chào buổi tối" },
    { kanji: "おやすみなさい", romaji: "oyasuminasai", meaning: "Chúc ngủ ngon" },
    { kanji: "どういたしまして", romaji: "douitashimashite", meaning: "Không có chi" },
    { kanji: "いただきます", romaji: "itadakimasu", meaning: "Cảm ơn vì bữa ăn (trước khi ăn)" },
    { kanji: "ごちそうさまでした", romaji: "gochisousama deshita", meaning: "Cảm ơn vì bữa ăn (sau khi ăn)" },
    { kanji: "はい、元気です", romaji: "hai, genki desu", meaning: "Vâng, tôi khỏe" },
    { kanji: "お名前は何ですか", romaji: "onamae wa nan desu ka", meaning: "Tên bạn là gì?" },
    { kanji: "私は___です", romaji: "watashi wa ___ desu", meaning: "Tôi là ___" },
    { kanji: "日本", romaji: "nihon", meaning: "Nhật Bản" },
    { kanji: "英語", romaji: "eigo", meaning: "Tiếng Anh" },
    { kanji: "勉強", romaji: "benkyou", meaning: "Học tập" },
    { kanji: "仕事", romaji: "shigoto", meaning: "Công việc" },
    { kanji: "友達", romaji: "tomodachi", meaning: "Bạn bè" },
];

const TuvungScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (

        <View style={styles.item}>
            <Text style={styles.kanji}>{item.kanji}</Text>
            <Text style={styles.romaji}>{item.romaji}</Text>
            <Text style={styles.meaning}>{item.meaning}</Text>
        </View>

    );

    return (
        <BackgroundInsight>
            {/* <BackButton goBack={navigation.goBack} style={styles.tuvungas} /> */}

            <View style={styles.container}>
                <FlatList
                    style={styles.tuvungb}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </BackgroundInsight>
    );
};

const styles = StyleSheet.create({
    // tuvungas:{
    //     margin: 10,
    // },
    // tuvungb:{
    //     marginTop:50,
    // },
    container: {
        flex: 1,
        marginTop:20,
        backgroundColor: '#fff',
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    kanji: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    romaji: {
        fontSize: 18,
        color: '#888',
    },
    meaning: {
        fontSize: 16,
        color: '#444',
    },
});

export default TuvungScreen;
