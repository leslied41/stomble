import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ScreenLayout } from '../../../components/common'
import { CustomButton } from '../../../components/auth'


type DeleteSuccessProps = {
    navigation: any
}

const DeleteSuccess: FC<DeleteSuccessProps> = ({ navigation }) => {
    return (
        <ScreenLayout header='Delete account'>
            <Text  className="mt-[22px] text-[16px] text-white leading-[19px] font-[700] mb-[12px]">You account has been deleted successfully</Text>
            <Text className="text-[13px] text-[#ababab] leading-[16px] font-[400] mb-[80px]">We are sorry to see you go but we hope to see you again very soon</Text>

            <CustomButton text='Delete account' borderRadius={100} onPress={() => { console.log("go back") }} />

        </ScreenLayout>
    )
}

export default DeleteSuccess

const styles = StyleSheet.create({})