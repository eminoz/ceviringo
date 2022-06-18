import { wordAction } from "./word-slice";

export const fetchWord = (data) => {
  return async (dispatch) => {
    const fetchData = async () => {
      //fetch data

      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/${data.language}/${data.word}`
      );
      //parse data

      if (!response.ok) {
        console.log("someting went wrong");
      }
      const responsedData = await response.json();
      //retun data
      return responsedData;
    };
    try {
      const { ...wordData } = await fetchData();
      console.log(wordData);
      dispatch(
        wordAction.fetchWord({
          word: data.word,
          language: data.wordtype,
          allWord: wordData,
        })
      );
    } catch (error) {}
  };
};
