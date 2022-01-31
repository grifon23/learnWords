import { colors } from './colors.light';
import { IAuth } from './../interfaces/auth.interface';

export const authColors: IAuth = {
    auth: {
        header: {
            $rightTxt: colors.$primary
        },

        info: {
            $title: colors.$textPrimary,
            $info: 'rgba(28, 32, 46, 0.6)'
        }
    }
}