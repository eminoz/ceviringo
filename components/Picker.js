import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wordActions } from "../store/word-slice";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { fetchWord } from "../store/word-action";
import Button from "./UI/Button";
const PickerComponent = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("en");

  const setLanguageHandler = (language) => {
    setSelectedValue(language);
    dispatch(wordActions.setLanguage({ language }));
  };
  const currentWord = useSelector((state) => state.word);

  const fetchWordFromApi = () => {
    dispatch(fetchWord(currentWord));
  };
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setLanguageHandler(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Türkçe" value="tr" />
      </Picker>
      <Button name="search" onPress={fetchWordFromApi} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default PickerComponent;
