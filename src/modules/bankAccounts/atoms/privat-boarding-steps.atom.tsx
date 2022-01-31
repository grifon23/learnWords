import { $size, Txt } from '@/shared'
import React, { FC, useState } from 'react'
import { Linking, StyleSheet, Text } from 'react-native'

import Clipboard from '@react-native-community/clipboard'
export const PrivatStepOne: FC = () => {
	return (
		<>
			<Text style={dataStyles.description}>
				Для початку Вам необхідно перейти на сайт{' '}
				<Txt
					style={dataStyles.touchableTxt}
					onPress={() => {
						Linking.openURL('https://next.privat24.ua/')
					}}>
					privat24.ua
				</Txt>{' '}
				і авторизуватися в ньому під своїм логіном і паролем.
			</Text>
		</>
	)
}

export const PrivatStepTwo: FC = () => {
	return (
		<>
			<Text style={dataStyles.description}>
				На головній сторінці перейдіть до вкладки «Бізнес» та оберіть
				«Мерчант».
			</Text>
		</>
	)
}

export const PrivatStepThree: FC = () => {
	const [copiedText, setCopiedText] = useState('')

	const copyToClipboard = () => {
		Clipboard.setString('185.69.154.136')
	}

	const fetchCopiedText = async () => {
		const text = await Clipboard.getString()
		setCopiedText(text)
	}
	console.log('text', copiedText)
	return (
		<>
			<Text style={dataStyles.description}>
				Далі оберіть картку, та введіть{' '}
				<Txt style={dataStyles.touchableTxt} onPress={() => {}}>
					IP
				</Txt>{' '}
				який ви можете скопіювати{' '}
				<Txt
					style={[dataStyles.touchableTxt]}
					onPress={copyToClipboard}>
					185.69.154.136
				</Txt>{' '}
				або у «Налаштуваннях» нашого застосунку і натисніть кнопку{' '}
				<Txt style={dataStyles.touchableTxt} onPress={fetchCopiedText}>
					«Далі».
				</Txt>{' '}
			</Text>
		</>
	)
}

export const PrivatStepFour: FC = () => {
	return (
		<>
			<Text style={dataStyles.description}>
				Після завершення налаштувань мерчанта натисніть кнопку{' '}
				<Txt style={dataStyles.touchableTxt} onPress={() => {}}>
					«Далі».
				</Txt>
			</Text>
			<Text style={dataStyles.description}>
				Зайдіть в розділ «Усі послуги» → «Мої мерчанти» та натисніть
				навпроти мерчанту кнопку{' '}
				<Txt style={dataStyles.touchableTxt} onPress={() => {}}>
					«Редагувати».
				</Txt>
				{'\n'}
			</Text>
			<Text style={dataStyles.description}>
				Скопіюйте ваше ІD (поле назва отримувача) та пароль мерчанта у
				відповідні поля додатку.
			</Text>
		</>
	)
}

export const PrivatStepFive: FC = () => {
	return (
		<>
			<Text style={dataStyles.description}>
				Ваша робота у вебдодатку Приват24 завершена, перейдіть у
				мобільний додаток, заповнивши поля натисніть{'\n'}
				<Txt style={dataStyles.touchableTxt} onPress={() => {}}>
					«Підключитись до ПриватБанку».
				</Txt>
			</Text>
		</>
	)
}

const dataStyles = StyleSheet.create({
	description: {
		lineHeight: $size(22, 20),
		fontSize: $size(16, 14),
		fontWeight: '400',
		fontFamily: 'GT Walsheim Pro',
	},
	touchableTxt: {
		color: '#FF3378',
		fontSize: $size(16, 14),
	},
})
