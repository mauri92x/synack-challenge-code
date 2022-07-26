import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDataBing,
  startGetData,
  fetchDataGoogle,
  fetchAllData,
  emptyData,
} from "../../../store/actions/homeActions";

export const useHome = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.data);
  const loading = useSelector((state) => state.home.loading);
  const [inputText, setInputText] = useState("");
  const [selectValue, setSelectValue] = useState(1);

  const handleInputText = (text) => {
    setInputText(text);
  };

  const handleSelectValue = (value) => {
    setSelectValue(value);
  };

  const handleSubmitData = () => {
    dispatch(startGetData());
    switch (selectValue) {
      case 1:
        dispatch(fetchDataGoogle({ term: inputText, value: selectValue }));
        break;

      case 2:
        dispatch(fetchDataBing({ term: inputText, value: selectValue }));
        break;

      case 3:
        dispatch(fetchAllData({ term: inputText, value: selectValue }));
        break;

      default:
        dispatch(emptyData());
        break;
    }
  };

  return {
    data,
    loading,
    inputText,
    selectValue,
    handleInputText,
    handleSelectValue,
    handleSubmitData,
  };
};
