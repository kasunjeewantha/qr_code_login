import { Platform } from 'react-native';

const IOS_VER = '0.0.1'
const ANDROID_VER = '0.0.1'
export const APP_VERSION = ((Platform.OS === 'ios') ? IOS_VER : ANDROID_VER)
