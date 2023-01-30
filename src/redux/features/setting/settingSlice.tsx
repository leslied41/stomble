import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type SettingSliceState = {
    isBirthdayBottomSheetOpen: boolean,
}

const initialState: SettingSliceState = {
    isBirthdayBottomSheetOpen: false,
};


export const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {

        //settings birthday bottom sheet
        openBirthdayBottomSheet: (state) => {
            state.isBirthdayBottomSheetOpen = true;
        },
        closeBirthdayBottomSheet: (state) => {
            state.isBirthdayBottomSheetOpen = false;
        },

    }
})

export const getIsBirthdayBottomSheetOpen = (state: RootState) =>
    state.setting.isBirthdayBottomSheetOpen;

export const {
    openBirthdayBottomSheet,
    closeBirthdayBottomSheet

} = settingSlice.actions;
export default settingSlice.reducer;