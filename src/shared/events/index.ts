import { Events } from 'jet-tools'

export type AppEvents = {
	event: {
		data: string
	}
	onTransactionCreated: { }
	onTransactionUpdated: { }
}

export const appEvents = new Events<AppEvents>()
