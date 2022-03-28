import { Platform } from 'react-native'

export default {
  applyOsMargin: () => Platform.OS === 'android' ? 50 : 30,
}