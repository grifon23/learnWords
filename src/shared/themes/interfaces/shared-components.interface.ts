import { ColorValue } from 'react-native';

export interface ISharedComponents {

    textInput: {
        $label: ColorValue
        $placeholder: ColorValue
        $border: ColorValue
        $color?: ColorValue
    }

    primaryHeader: {
        $bg: ColorValue
        $txt: ColorValue
        $icon: ColorValue
        $shadow: ColorValue
    }

    btn: {
        $disabled: ColorValue
    }

    primaryBtn: {
        $bg: ColorValue
        $txt: ColorValue
    }

    borderBtn: {
        $bg: ColorValue
        $txt: ColorValue
        $border: ColorValue
    }

    squareBtnWithIcon: {
        $bg: ColorValue
        $disabled: ColorValue
        $iconColor: ColorValue
    }

    iconSvg: {
        $bg: ColorValue
        $activeBg: ColorValue
        $border: ColorValue
        $activeBorder: ColorValue
    }

    calendars: {
        $bg: ColorValue
        strip: {
            $bg: ColorValue
            $activeBg: ColorValue
            $label: ColorValue
            $activeLabel: ColorValue
            $title: ColorValue
            $activeTitle: ColorValue
        }
    }
}