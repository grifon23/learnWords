import React, { FC, useMemo, useState } from 'react'
import { categoriesApi } from '@/api'
import { IconSelectSmart } from '@/modules/icons/smart-components'
import { categoryService } from '@/services/domain'
import {
	$size,
	BaseHeader,
	Button,
	IRouteParams,
	ScreenLayout,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { NewCategoryFieldComponent } from '../components'

interface IProps extends IRouteParams {}

export const NewCategoryScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const [name, setName] = useState(null)
	const [icon, setIcon] = useState(null)

	const dataIsValid = useMemo(() => {
		return name && icon
	}, [name, icon])

	const add = async () => {
		try {
			await categoriesApi.addCategory({ title: name, iconKey: icon })
			await categoryService.loadCategories()
			navigation.goBack()
		} catch (e) {}
	}

	return (
		<ScreenLayout
			needScroll={false}
			header={
				<BaseHeader
					title={'Додати нову категорію'}
					letfBtnIcon={'back-arrow'}
					onPress={navigation.goBack}
				/>
			}>
			<>
				<View>
					<NewCategoryFieldComponent name={name} onChange={setName} />

					<IconSelectSmart selected={icon} onSelect={setIcon} />

					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'position' : null}
						keyboardVerticalOffset={75}>
						<View style={styles.btnContainer}>
							{dataIsValid ? (
								<Button
									style={styles.button}
									title="Зберегти"
									onPress={add}
								/>
							) : null}
						</View>
					</KeyboardAvoidingView>
				</View>
			</>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		button: {
			borderRadius: 10,
			width: $size(285),
			height: $size(48),
			alignSelf: 'center',
			zIndex: 999,
		},
		btnContainer: {
			backgroundColor: theme.$layoutBg,
			justifyContent: 'flex-start',
			height: $size(80, 75),
			borderBottomWidth: 40,
			borderColor: theme.$layoutBg,
		},
	})
