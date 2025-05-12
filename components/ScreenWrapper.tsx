import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'
import { colors } from '@/constants/theme'
import { useSafeAreaInsets } from "react-native-safe-area-context";


const ScreenWrapper = ({style, children}: ScreenWrapperProps) => {
    
    const insets = useSafeAreaInsets();

    const { height } = Dimensions.get("window");

    let paddingTop = Platform.OS == 'ios' ? height * 0.06 : insets.top;
    return (
    <View style={[{
        paddingTop,
         flex: 1,
         backgroundColor: colors.neutral900
    },style]}>
        <StatusBar barStyle="light-content" />
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})