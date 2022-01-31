import { fonts } from './fonts'

// --- DEV ----
export const dynamicConfig = {
	// baseUrl: 'http://localhost:3000/app/',
	// socketUrl: 'http://localhost:3000/',

	baseUrl: 'http://185.69.154.136:5500/app/',
	socketUrl: 'http://185.69.154.136:5500/',
}

export const config = {
	...dynamicConfig,
	fonts,
}
