// src/screens/Nguphap.js
import React from 'react';
import BackButton from '../../components/BackButton';
import Background from '../../components/Background';
import BackgroundInsight from '../../components/BackgroundInsight';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
    { grammar: "です", example: "私は学生です。", meaning: "Tôi là học sinh." },
    { grammar: "ます", example: "毎日、勉強します。", meaning: "Hàng ngày, tôi học." },
    { grammar: "が", example: "犬が好きです。", meaning: "Tôi thích chó." },
    { grammar: "に", example: "学校に行きます。", meaning: "Tôi đi đến trường." },
    { grammar: "を", example: "本を読みます。", meaning: "Tôi đọc sách." },
    { grammar: "の", example: "これは私の本です。", meaning: "Đây là sách của tôi." },
    { grammar: "と", example: "友達と遊びます。", meaning: "Tôi chơi với bạn." },
    { grammar: "も", example: "私も行きます。", meaning: "Tôi cũng đi." },
    { grammar: "から", example: "日本から来ました。", meaning: "Tôi đến từ Nhật Bản." },
    { grammar: "まで", example: "東京まで行きます。", meaning: "Tôi đi đến Tokyo." },
    { grammar: "や", example: "本やペンがあります。", meaning: "Có sách và bút." },
    { grammar: "で", example: "電車で行きます。", meaning: "Tôi đi bằng tàu điện." },
    { grammar: "ね", example: "いいですね。", meaning: "Tốt nhỉ." },
    { grammar: "よ", example: "これは本当によ。", meaning: "Đây thực sự là sự thật đấy." },
    { grammar: "か", example: "あなたは学生ですか？", meaning: "Bạn là học sinh phải không?" },
    { grammar: "けど", example: "行きたいけど、時間がない。", meaning: "Tôi muốn đi nhưng không có thời gian." },
    { grammar: "から", example: "忙しいから、行けません。", meaning: "Vì bận nên tôi không thể đi." },
    { grammar: "て", example: "本を読んでいます。", meaning: "Tôi đang đọc sách." },
    { grammar: "たい", example: "映画を見たいです。", meaning: "Tôi muốn xem phim." },
    { grammar: "ない", example: "食べたくないです。", meaning: "Tôi không muốn ăn." },
];

const NguphapScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.grammar}>{item.grammar}</Text>
            <Text style={styles.example}>{item.example}</Text>
            <Text style={styles.meaning}>{item.meaning}</Text>
        </View>
    );

    return (
        <BackgroundInsight>
            {/* <BackButton goBack={navigation.goBack} style={styles.tuvungas} /> */}

            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </BackgroundInsight>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    grammar: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    example: {
        fontSize: 18,
        color: '#555',
    },
    meaning: {
        fontSize: 16,
        color: '#333',
    },
});

export default NguphapScreen;
