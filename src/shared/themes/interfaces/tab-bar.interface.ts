import { ColorValue } from 'react-native';

export interface ITabBar {
    tabBar: {
        $txtActive: ColorValue
        $txtDisabled: ColorValue
        $iconActive: ColorValue
        $iconDisabled: ColorValue

        createTransactionBtn: {
            $bg: ColorValue,
            $border: ColorValue,
            $icon: ColorValue,

            $mainShadow: ColorValue,
            $borderShadow: ColorValue
        }
    }
}