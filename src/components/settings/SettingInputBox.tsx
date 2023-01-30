import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC } from 'react'
import { CloseIcon } from '../svg'
import { EyeCloseIcon, EyeIcon } from '../icons';

type SettingInputBoxProps = {
    placeholder: string;
    onPress: () => void;
    center?: boolean;
    error?: boolean;
    value: string;
    visible?: boolean;
    type?: string;
    phColor?: string
    onChange: ((text: string) => void) | undefined;
}

const SettingInputBox: FC<SettingInputBoxProps> = ({ placeholder, phColor, center, onPress, error, value, onChange, visible, type }: any) => {

    return (
        <>
            <View className="flex-row relative items-center">
                <TextInput
                    className="py-2 h-[32px] rounded-[5px] flex-1  px-2 text-white text-[16px] leading-[19.2px]"
                    placeholder={placeholder}
                    textContentType={type === "password" ? "password" : "none"}
                    secureTextEntry={visible ? visible : false}
                    textAlign={center ? "center" : "left"}
                    placeholderTextColor={phColor ? phColor : "white"}
                    defaultValue={value}
                    onChangeText={onChange}
                    style={error
                        ? { backgroundColor: "#FB4E4E" }
                        : { backgroundColor: "#5C5C5C" }}
                />
                <View className='absolute right-0 pr-2'>
                    <Pressable onPress={onPress}>
                        {type === "password" ? !visible ? <EyeIcon /> : <EyeCloseIcon /> : <CloseIcon />}
                    </Pressable>
                </View>

                
            </View>
        </>
    )
}

export default SettingInputBox

const styles = StyleSheet.create({})