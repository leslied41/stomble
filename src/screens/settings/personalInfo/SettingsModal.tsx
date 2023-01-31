import {
    TouchableWithoutFeedback,
    Modal,
    View,
} from 'react-native'
import React, { FC } from 'react'

type SettingsModalProps = {
    children: React.ReactNode,
    visible: boolean,
    dismiss: () => void,
    transparent: boolean,
    // animationType: string,
}

const SettingsModal: FC<SettingsModalProps> = ({ transparent, children, visible, dismiss }) => {
    return (
        <View style={{}}>

            <Modal
                visible={visible}
                transparent={transparent}
                onRequestClose={dismiss}
                animationType={'slide'}
            >
                <TouchableWithoutFeedback onPress={dismiss}>
                    <View style={{ backgroundColor: 'rgba(92, 92, 92, 0.5)' }} className="absolute flex-1 top-0 bottom-0 left-0 right-0" />
                </TouchableWithoutFeedback>
                {/* bg-[#222222] */}
                <View className=" bg-[#222222] self-center justify-center align-center mt-[275px] w-[258px] rounded-lg py-4">
                    {children}
                </View>
            </Modal>
        </View>
    )
}


export default SettingsModal