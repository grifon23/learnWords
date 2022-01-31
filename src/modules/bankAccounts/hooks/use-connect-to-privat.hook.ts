import { useNavigation } from '@react-navigation/native';
import { bankAccountService } from "@/services/domain"
import { RouteKey, useForm } from "@/shared"
import { useEffect, useState } from "react"
import { validateConnectToPrivate } from '../validations';
import { ConnectToPrivatFormEnum } from '../enums';
import { StackNavigationProp } from '@react-navigation/stack';

type PrivateBankConnectedProps = StackNavigationProp<{
    [RouteKey.PrivatBankConnected]
}>

type IForm = Record<ConnectToPrivatFormEnum, string>

export const useConnectToPrivat = (bankId: number) => {
    const [isDisabledBtn, setDisabled] = useState<boolean>(false)

    const nav = useNavigation<PrivateBankConnectedProps>()

    const { values, errors, setFormField, onSubmit } = useForm<IForm>(
        { merchantId: '', password: '', card: '' },
        validateConnectToPrivate
    )

    const handleSubmit = async () => {
        try {
            const params = { ...values }

            await bankAccountService.connectToPrivatBankAccount({
                ...params,
                merchantId: Number(values.merchantId),
                bankAccountId: bankId,
            })

            onSuccess()
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const onSuccess = () => {
        nav.navigate(RouteKey.PrivatBankConnected)
    }

    useEffect(() => {
        const { merchantId, password, card } = values

        if (!merchantId || !password || !card) setDisabled(true)
        else setDisabled(false)
    }, [values])

    return {
        values,
        errors,
        isDisabledBtn,
        setFormField,
        onSubmit: () => onSubmit(handleSubmit)
    }

}