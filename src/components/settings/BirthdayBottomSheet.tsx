import { View, Text } from 'react-native'
import React, { FC, useState } from 'react'
import { BirthdayInputBottomSheet } from '../auth'


type BirthdayBottomSheetProps = {
    date: Date,
    closeBottomSheet: () => void;
    onChange: (event: any, selectedDate: any) => void;
    isBirthdayBottomSheetOpen: boolean;

}

const BirthdayBottomSheet: FC<BirthdayBottomSheetProps> = ({ date, closeBottomSheet, onChange, isBirthdayBottomSheetOpen }) => {

    return (
        <View>
            <BirthdayInputBottomSheet date={date} closeBottomSheet={closeBottomSheet} onChange={onChange} isBirthdayBottomSheetOpen={isBirthdayBottomSheetOpen} />
        </View>
    )
}



export default BirthdayBottomSheet