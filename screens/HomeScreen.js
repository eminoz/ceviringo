import React from "react";

import Search from "../components/Search";

import Picker from "../components/Picker";
import { Container } from "../styled/Card.Styled";
import { useSelector, useDispatch } from "react-redux";
import {  ScrollView, Text } from "react-native";
import ListWord from "../components/ListWord";
const HomeScreen = ({ navigation }) => {
  const currentWord = useSelector((state) => state.word);
  console.log(currentWord.allWord);
  return (
    <Container>
      <Search />
      <Picker />
      <ScrollView style={{ marginHorizontal: 20 }}>
        {currentWord ? <ListWord /> : <Text></Text>}
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
