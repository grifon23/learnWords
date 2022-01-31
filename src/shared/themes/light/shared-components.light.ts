import { colors } from './colors.light';
import { ISharedComponents } from '../interfaces/shared-components.interface';

export const sharedComponentsColors: ISharedComponents = {
    textInput: {
        $label: '#AEB1B8',
        $placeholder: 'rgba(28, 32, 46, .12)',
        $border: 'rgba(28, 32, 46, .24)',
        $color: '#1C202E'
    },

    primaryHeader: {
        $bg: '#FFFFFF',
        $txt: colors.$textPrimary,
        $icon: colors.$textPrimary,
        $shadow: '#000'
    },

    btn: {
        $disabled: 'rgba(207, 212, 229, 1)',
    },

    primaryBtn: {
        $bg: colors.$primary,
        $txt: '#fff'
    },

    borderBtn: {
        $bg: colors.$layoutBg,
        $txt: '#983B3B',
        $border: '#983B3B'
    },

    squareBtnWithIcon: {
        $bg: colors.$primary,
        $disabled: 'rgba(207, 212, 229, 1)',
        $iconColor: '#fff'
    },

    iconSvg: {
        $bg: 'rgba(247, 247, 247, 1)',
        $activeBg: '#fff',
        $border: '#CCCCCC',
        $activeBorder: 'rgba(255, 51, 120, 1)'
    },

    calendars: {
        $bg: '#FFFFFF',
        strip: {
            $bg: 'rgba(28, 32, 46, .04)',
            $activeBg: 'rgba(255, 51, 120, 1)',
            $label: 'rgba(174, 177, 184, 1)',
            $activeLabel: 'rgba(18, 24, 41, 1)',
            $title: 'rgba(28, 32, 46, .9)',
            $activeTitle: 'rgba(255, 255, 255, 1)'
        }
    }
}