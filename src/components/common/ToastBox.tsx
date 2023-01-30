
import { Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

const toastConfig = {
    settingToast: ({ text1 }: any) => (
        <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: -8 }, shadowOpacity: .5, elevation: 3 }} className='bg-[#222222] w-full items-center h-[77px] bottom-[-10px] rounded-t-[10px] pt-[13px]'>
            <Text className="text-white text-[15px] font-[500] leading-[18px]">{text1}</Text>
        </View>
    )
};

export default function ToastBox(props: any) {
    return (
        <Toast config={toastConfig} />
    );
}