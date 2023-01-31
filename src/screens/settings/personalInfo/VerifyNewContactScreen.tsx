import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ScreenLayout, ToastBox } from '../../../components/common'
import { VerifyCodes } from '../../../components/auth'
import { partialEmail } from '../../../services/utils'
import { CommonScreenProps } from '../../../types/navigation'
import Toast from 'react-native-toast-message';


const VerifyNewContactScreen: FC<CommonScreenProps<"VeryfyNewContact">> = ({ route, navigation }) => {
    const { header, title , onPress} = route.params
    const hidden = partialEmail(header)

    return (
        <>
            <ScreenLayout header={title}>
                <VerifyCodes buttonTitle="Confirm" header={hidden} onPress={onPress} buttonRadius={100} />
            </ScreenLayout>
        </>
    )
}

export default VerifyNewContactScreen

const styles = StyleSheet.create({})