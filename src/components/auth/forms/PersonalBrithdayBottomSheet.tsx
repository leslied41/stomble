import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeBirthdayBottomSheet,
  getIsBirthdayBottomSheetOpen,
  setBirthday,
  clearBirthday,
} from "../../../redux/features/auth/authSlice";
import BirthdayInputBottomSheet from "./BirthdayInputBottomSheet";
import { converDate } from "../../../services/utils";

const PersonalBirthdayBottomSheet = () => {
  const [date, setDate] = useState(new Date());
  //redux
  const isBirthdayBottomSheetOpen = useSelector(getIsBirthdayBottomSheetOpen);
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    dispatch(setBirthday(converDate(currentDate)));
    setDate(currentDate);
  };

  useEffect(() => {
    return () => {
      dispatch(clearBirthday());
    };
  }, []);

  return (
    <BirthdayInputBottomSheet
      date={date}
      closeBottomSheet={() => dispatch(closeBirthdayBottomSheet())}
      onChange={onChange}
      isBirthdayBottomSheetOpen={isBirthdayBottomSheetOpen}
    />
  );
};

export default PersonalBirthdayBottomSheet;
