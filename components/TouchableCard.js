import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Container, Text, TouchableCard } from "../styled/TouchableCard.styled";

const TouchableCardComponent = ({ navigation }) => {
  const { ...currentWord } = useSelector((state) => state.word.allWord);
  useEffect(() => {}, [currentWord, useSelector]);

  return (
    <Container>
      <TouchableCard
        onPress={() => {
          console.log("touchable pressed");
          navigation.navigate("Details");
        }}
      >
        <Text> scroll new screeen</Text>
      </TouchableCard>
    </Container>
  );
};

export default TouchableCardComponent;
