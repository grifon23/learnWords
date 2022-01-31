import { ITabBar } from "../interfaces/tab-bar.interface";
import { colors } from "./colors.light";

export const tabBarColors: ITabBar = {
    tabBar: {
        $txtActive: colors.$primary,
        $txtDisabled: colors.$textSecondary,
        $iconActive: colors.$primary,
        $iconDisabled: '#AEB1B8',

        createTransactionBtn: {
            $bg: colors.$primary,
            $border: colors.$layoutBg,
            $icon: '#fff',

            $mainShadow: colors.$primary,
            $borderShadow: '#000'
        }
    }
}