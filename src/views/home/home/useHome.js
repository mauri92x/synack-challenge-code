import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetData } from "../../../store/actions/homeActions";

export const useHome = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.data);

  useEffect(() => {
    dispatch(startGetData());
  }, []);

  return {
    data,
  };
};
