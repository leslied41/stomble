import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { rePhoneNumber } from '../../../services/utils/registerFormValidate'
import { ScreenLayout } from '../../../components/common'
import { CustomButton, PhoneNumberInput } from '../../../components/auth'
import AlertIcon from '../../../components/svg/AlertIcon'
import Toast from "react-native-toast-message";

type ChangePhoneScreenProps = {
    navigation: any
}

const ChangePhoneScreen: FC<ChangePhoneScreenProps> = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const verify = rePhoneNumber.test(phoneNumber)

    const onPress = () => {
        navigation.navigate("PersonalInfo")
        Toast.show({
            position: 'bottom',
            bottomOffset: -10,
            type: 'settingToast',
            visibilityTime: 3000,
            text1: "Great! Your phone number has been successfully changed"
        });
    }


    return (
        <ScreenLayout header="Phone number">
            <Text className="mt-[22px] size-[16px] text-white leading-[19.2px] font-bold mb-[15px]">Change Phone Number</Text>
            <Text className="size-[14px] text-[#ababab] leading-[19.2px] font-medium mb-[16.8px]">By changing this number you are changing your primary phone number for this account</Text>

            <PhoneNumberInput defaultValue={phoneNumber} onChangeFormattedText={(value) => setPhoneNumber(value)} error={phoneNumber.length >= 1 && !verify} />


            <View className="my-[16px]">
                {phoneNumber.length >= 1 && !verify &&
                    <View className='flex-row items-center'>
                        <AlertIcon />
                        <Text className="ml-2 text-[13px] font-normal mr-4 text-[#FB4E4E] leading-[16px]">Please enter a valid phone number</Text>
                    </View>
                }
                {phoneNumber &&
                    <View className="">
                        <View className='flex-row items-center'>
                            <AlertIcon />
                            <Text className="ml-2 text-[13px] font-normal mr-4 text-[#FB4E4E] leading-[16px]">This phone number is already registered</Text>
                        </View>
                    </View>
                }
            </View>

            {/* VeryfyNewContact */}
            <View className="my-[16px]">
                <CustomButton text="Send code" borderRadius={100} onPress={() => { navigation.navigate("VeryfyNewContact", { header: phoneNumber, title: "Phone number", onPress }) }} />
            </View>
        </ScreenLayout>
    )
}

export default ChangePhoneScreen

const styles = StyleSheet.create({})