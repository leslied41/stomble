import React, { useState, useEffect } from "react";
import {
  closeBusinessBirthdayBottomSheet,
  getIsBusinessBirthdayBottomSheetOpen,
  setBusinessBirthday,
  clearBusinessBirthday,
} from "../../../redux/features/auth/authSlice";
import BirthdayInputBottomSheet from "./BirthdayInputBottomSheet";
import { converDate } from "../../../services/utils";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const BusinessBirthdayBottomSheet = () => {
  const [date, setDate] = useState(new Date());
  //redux
  const isBusinessBirthdayBottomSheetOpen = useAppSelector(
    getIsBusinessBirthdayBottomSheetOpen
  );
  const dispatch = useAppDispatch();

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    dispatch(setBusinessBirthday(converDate(currentDate)));
    setDate(currentDate);
  };

  useEffect(() => {
    return () => {
      dispatch(clearBusinessBirthday());
    };
  }, [dispatch]);
  return (
    <BirthdayInputBottomSheet
      date={date}
      closeBottomSheet={() => dispatch(closeBusinessBirthdayBottomSheet())}
      onChange={onChange}
      isBirthdayBottomSheetOpen={isBusinessBirthdayBottomSheetOpen}
    />
  );
};

export default BusinessBirthdayBottomSheet;
