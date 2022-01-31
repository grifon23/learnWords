import React, { FC, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { CategoryIcon } from '../atoms'
import { DefaultIconKey, defaultIconsList } from '../config'
import { uploadIconReq } from '@/api/icons/requests'
import { categoryService } from '@/services/domain'
import { mediaService } from '@/services/system/media.service'
import { selectIcons } from '@/store/category'
import { useSelector } from 'react-redux'

interface IProps {
	selected: string | number
	onSelect: (key: string | number) => void
}

export const IconSelectSmart: FC<IProps> = ({ onSelect, selected }) => {
	const { styles } = useTheme(createStyles)
	const [isUploadingIcon, setUploadingIcon] = useState(false)
	const icons = useSelector(selectIcons)

	const uploadNewIcon = async () => {
		try {
			setUploadingIcon(true)
			const file = await mediaService.openCropPicker()
			console.log(file)
			await uploadIconReq({ file })
			await categoryService.loadCategories()
		} catch (e) {
			console.log(e)
		} finally {
			setUploadingIcon(false)
		}
	}

	const iconsRender = defaultIconsList.map((item, i) => (
		<CategoryIcon
			style={styles.item}
			key={item.icon}
			icon={item.icon}
			isActive={item.icon === selected}
			onPress={() => onSelect(item.icon)}
		/>
	))

	const remoteIconsRender = icons.map(item => {
		return (
			<CategoryIcon
				style={styles.item}
				key={item.id}
				url={item.url}
				isActive={item.id === selected}
				onPress={() => onSelect(item.id)}
			/>
		)
	})

	return (
		<View style={styles.container}>
			<Txt style={styles.title} weight={'300'}>
				Оберiть іконку
			</Txt>
			<ScrollView
				showsVerticalScrollIndicator={false}
				scrollEnabled={true}>
				<View style={styles.categoriesView}>
					{iconsRender}
					{remoteIconsRender}
					<CategoryIcon
						style={styles.item}
						icon={DefaultIconKey.ADDICON}
						isActive={false}
						onPress={() => uploadNewIcon()}
					/>
				</View>
			</ScrollView>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			marginBottom: $size(40, 35),
		},
		item: {
			marginHorizontal: $size(6, 4),
		},
		title: {
			fontSize: $size(12, 10),
			paddingHorizontal: $size(20, 18),
			marginBottom: $size(13, 10),
			color: theme.$textSecondary,
		},
		categoriesView: {
			justifyContent: 'center',
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
	})
