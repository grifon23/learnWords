import { $size } from "@/shared"
import { useEffect, useRef } from "react"
import { Animated } from "react-native"

export const useImgAnimation = (isStartAnimation: boolean) => {
    const animatedVal = useRef(new Animated.Value(1)).current

    const animation = (animVal: Animated.Value, toVal: number) =>
        Animated.timing(animVal, {
            toValue: toVal,
            duration: 200,
            useNativeDriver: false,
        }).start()

    useEffect(() => {
        if (isStartAnimation) {
            return animation(animatedVal, 0)
        }
        animation(animatedVal, 1)
    }, [isStartAnimation])

    const marginBottom = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [$size(25, 15), $size(55, 50)],
    })

    const imgWidth = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [$size(95), $size(145, 140)],
    })

    const imgHeight = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [$size(90, 100), $size(165, 160)],
    })

    return {
        imgStyle: {
            width: imgWidth,
            height: imgHeight,
            marginBottom
        }
    }
}