import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeBusinessBirthdayBottomSheet,
  getIsBusinessBirthdayBottomSheetOpen,
  setBusinessBirthday,
  clearBusinessBirthday,
} from "../../../redux/features/auth/authSlice";
import BirthdayInputBottomSheet from "./BirthdayInputBottomSheet";
import { converDate } from "../../../services/utils";

const BusinessBirthdayBottomSheet = () => {
  const [date, setDate] = useState(new Date());
  //redux
  const isBusinessBirthdayBottomSheetOpen = useSelector(
    getIsBusinessBirthdayBottomSheetOpen
  );
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    dispatch(setBusinessBirthday(converDate(currentDate)));
    setDate(currentDate);
  };

  useEffect(() => {
    return () => {
      dispatch(clearBusinessBirthday());
    };
  }, []);
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
