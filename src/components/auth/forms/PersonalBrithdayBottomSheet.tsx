import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
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
  const isBirthdayBottomSheetOpen = useAppSelector(
    getIsBirthdayBottomSheetOpen
  );
  const dispatch = useAppDispatch();

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    dispatch(setBirthday(converDate(currentDate)));
    setDate(currentDate);
  };

  useEffect(() => {
    return () => {
      dispatch(clearBirthday());
    };
  }, [dispatch]);

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
