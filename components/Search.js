import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { TextInput } from "../styled/Search.Styled";
import { useDispatch } from "react-redux";
import { wordActions } from "../store/word-slice";

const Search = () => {
  const dispatch = useDispatch();
  const setWordHandler = (word) => {
    dispatch(wordActions.setWord({ word }));
  };
  return (
    <KeyboardAvoidingView>
      <TextInput onChangeText={setWordHandler} />
    </KeyboardAvoidingView>
  );
};

export default Search;
