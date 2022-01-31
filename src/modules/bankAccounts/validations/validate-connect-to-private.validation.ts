import _ from 'lodash'
import validate from 'validate.js'
import { ConnectToPrivatFormEnum } from './../enums/connect-to-privat.enum';

const constraints = {
    [ConnectToPrivatFormEnum.MERCHANT_ID]: {
        presence: true,
    },
    [ConnectToPrivatFormEnum.PASSWORD]: {
        presence: true,
    },
    [ConnectToPrivatFormEnum.CARD]: {
        presence: true,
        format: {
            pattern: /^(34|37|4|5[1-5]).*$/,
            message: 'Номер картки введено некоректно'
        },
        length: function (value) {
            if (value) {
                // Visa, Mastercard
                if ((/^(4|5[1-5]).*$/).test(value)) return { is: 16 };
            }

            return false;
        }
    },
}

export const validateConnectToPrivate = <T>(data: T) => {
    const errors = validate(data, constraints)
    if (_.isEmpty(errors)) return null

    _.each(errors, (it, key, arr) => {
        arr[key] = it[0]
    })

    return errors
}
