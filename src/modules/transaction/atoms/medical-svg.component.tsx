import React, { FC } from 'react'

import Medical from '@/assets/images/categories/medical.svg'
import { $size } from '@/shared'
import { SvgXml } from 'react-native-svg'

export const MedicalSvg: FC = () => {
	return (
		<SvgXml
			// style={styles.image}
			xml={Medical as any}
			width={$size(23)}
			height={$size(23)}
		/>
	)
}
