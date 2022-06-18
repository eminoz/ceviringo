import React from "react";
import {
  Button,
  ButtonName,
  ButtonContainer,
} from "../../styled/Button.styled";
const PressableButton = ({ onPress, name }) => {
  return (
    <ButtonContainer>
      <Button onPress={onPress}>
        <ButtonName>{name}</ButtonName>
      </Button>
    </ButtonContainer>
  );
};

export default PressableButton;
