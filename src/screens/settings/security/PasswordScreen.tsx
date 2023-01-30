import { View, Text } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { ScreenLayout } from '../../../components/common';
import { CustomButton } from '../../../components/auth';
import { SettingInputBox } from '../../../components/settings';
import { CommonScreenProps } from '../../../types/navigation';



const PasswordScreen: FC<CommonScreenProps<"CurrentPassword">> = ({ navigation }) => {
    const [password, setPassword] = useState<string>("AlphaBall1245123$%")
    const [visible, setVisible] = useState<boolean>(true)

    const onPress = useCallback(() => {
        navigation.navigate("NewPassword")
    }, [])

    return (
        <ScreenLayout header='Change Password'>
            <View className='mt-[22px] mb-[59px]'>
                <SettingInputBox visible={visible} placeholder={password} type="password" onPress={() => setVisible(!visible)} value={password} onChange={() => { }} />
            </View>

            <CustomButton text="Continue" onPress={() => navigation.navigate("VerifyScreen", { header: '+61*****234', title: "Change password", onPress: onPress })} borderRadius={100} />

        </ScreenLayout>

    )
}

export default PasswordScreen