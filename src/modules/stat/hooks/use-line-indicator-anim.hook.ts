import { useEffect, useRef } from "react"
import { Animated, ColorValue } from "react-native"

interface IArgs {
    current: number,
    target: number,
    startColor: ColorValue
    endColor: ColorValue

}

export const useLineIndicatorAnim = ({ current, target, startColor, endColor }: IArgs) => {
    const animatedVal = useRef(new Animated.Value(0)).current

    const indicatorBg = animatedVal.interpolate({
        inputRange: [0, target],
        outputRange: [String(startColor), String(endColor)],
    })

    const indicatorWidth = animatedVal.interpolate({
        inputRange: [0, target],
        outputRange: ['0%', '100%'],
    })

    const animation = () => Animated.timing(animatedVal, {
        toValue: current,
        duration: 300,
        useNativeDriver: false,
    }).start()

    useEffect(() => {
        animation()

        animatedVal.setValue(current)
    }, [])

    useEffect(() => {
        animation()
    }, [current, target])

    return {
        indicatorBg,
        indicatorWidth
    }
}