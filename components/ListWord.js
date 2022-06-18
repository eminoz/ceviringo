import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector,  } from "react-redux";
const ListWord = () => {
  const word = useSelector((state) => state.word.allWord);
  console.log("first");

  return (
    <FlatList
      data={word}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { word } }) => <Text>{console.log(word)}</Text>}
    />
  );
};

export default ListWord;
