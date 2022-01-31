import { TextInputMask } from 'react-native-masked-text'
import React from 'react'

// Docs
// https://github.com/benhurott/react-native-masked-text

interface IProps {
	type:
		| 'credit-card'
		| 'cpf'
		| 'cnpj'
		| 'zip-code'
		| 'only-numbers'
		| 'money'
		| 'cel-phone'
		| 'datetime'
		| 'custom'
	value: string
	name: string
	onChange: (val: string) => void
	styles?: any
	inputProps?: any
	disabled?: boolean
}

export const MaskedInput = (props: IProps) => {
	const getOptions = () => {
		if (props.type === 'cel-phone')
			return {
				maskType: 'BRL',
				withDDD: true,
				dddMask: '+99 (999) 999 99 99',
			}
		return {}
	}

	return (
		<TextInputMask
			type={props.type}
			options={{
				...getOptions(),
			}}
			includeRawValueInChangeText={true}
			value={props.value}
			onChangeText={(txt1, txt2) => {
				props.onChange(txt2)
			}}
			style={props.styles}
			autoCapitalize="none"
			placeholderTextColor="#aaaaaa"
			{...props.inputProps}
			editable={!props.disabled}
		/>
	)
}
