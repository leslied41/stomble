import { View, Text } from 'react-native'
import React, { FC, useState } from 'react'
import { ScreenLayout } from '../../../components/common';
import { CustomButton, PasswordInput } from '../../../components/auth';
import { specialChars } from '../../../services/utils/registerFormValidate'

type NewPasswordScreenProps = {
    navigation: any;
}

const NewPasswordScreen: FC<NewPasswordScreenProps> = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState<string>("")
    const ps_special_char_check = specialChars.test(newPassword)
    const ps_length_check = newPassword.length >= 8
    const disabled = ps_length_check && ps_special_char_check

    function onPress() {
        disabled && navigation.navigate("Security")
    }

    return (
        <ScreenLayout header='Change password'>
            <View className='mt-[22px] mb-[40px]'>
                <PasswordInput
                    left
                    onBlur={() => { }}
                    ps_length_check={ps_length_check}
                    onChange={(value) => setNewPassword(value)}
                    value={newPassword}
                    special_char_check={ps_special_char_check}
                />
            </View>
            <CustomButton text="Submit" onPress={onPress} borderRadius={100} disabled={!disabled} />
        </ScreenLayout>
    )
}

export default NewPasswordScreen