import { ColorValue } from 'react-native';

export interface IAuth {
    auth: {
        header: {
            $rightTxt: ColorValue
        }

        info: {
            $title: ColorValue,
            $info: ColorValue
        }
    }
}