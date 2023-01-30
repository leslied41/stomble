import { View, Text, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import { reEmail } from '../../../services/utils/registerFormValidate';
import { ScreenLayout, ToastBox } from '../../../components/common';
import SettingInputBox from '../../../components/settings/SettingInputBox';
import AlertIcon from '../../../components/svg/AlertIcon';
import { CustomButton } from '../../../components/auth';
import { useRoute, RouteProp, } from '@react-navigation/native';
import { CommonScreenProps, RootScreenProps } from '../../../types/navigation';
import Toast from 'react-native-toast-message';

const ChangeEmailScreen: FC<CommonScreenProps<"ChangeEmail">> =
    ({ navigation, route }) => {

        const { title } = route.params;

        const [email, setEmail] = useState("");
        const [alreadyRegistered, setAlreadyRegistered] = useState(false)
        const emailError = email.length >= 1 && reEmail.test(email);

        const onPress = () => {
            navigation.navigate("PersonalInfo")
            Toast.show({
                position: 'bottom',
                bottomOffset: -10,
                type: 'settingToast',
                visibilityTime: 3000,
                text1: "Great! Your email has been successfully changed"
            });
        }

        return (
            <>
                <ScreenLayout header="Email">
                    <Text className="mt-[22px] size-[16px] text-white leading-[19.2px] font-bold mb-[15px]">{title}</Text>
                    <Text className="size-[14px] text-[#ababab] leading-[19.2px] font-medium mb-[16.8px]">We will send you a verification code via email to verify the updated email address</Text>

                    <View className="mt-[39px] mb-[16px]">
                        <SettingInputBox phColor='#ababab' center={true} value={email} placeholder={"Email address"} onPress={() => setEmail("")} error={email.length >= 1 && !emailError} onChange={(value) => setEmail(value)} />
                    </View>

                <View className="my-[16px]">
                        {email.length >= 1 && !emailError &&
                            <View className='flex-row items-center'>
                                <AlertIcon />
                                <Text className="ml-2 text-[13px] font-normal mr-4 text-[#FB4E4E] leading-[16px]">Please enter a valid email address</Text>
                            </View>
                        }
                        {alreadyRegistered &&
                            <View className="">
                                <View className='flex-row items-center'>
                                    <AlertIcon />
                                    <Text className="ml-2 text-[13px] font-normal mr-4 text-[#FB4E4E] leading-[16px]">This email is already registered</Text>
                                </View>
                            </View>
                        }
                    </View>

                    <View className="">
                        <CustomButton text="Send code" borderRadius={100} onPress={() => { navigation.navigate("VeryfyNewContact", { header: email, title: "Email", onPress }) }} />
                    </View>
                </ScreenLayout>
            </>
        )
    }

export default ChangeEmailScreen