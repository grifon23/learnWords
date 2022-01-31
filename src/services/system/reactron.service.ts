import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import { AsyncStorage } from 'react-native'

const reactron = Reactotron.configure({
	name: 'React Native',
})
	.useReactNative({
		asyncStorage: true, // there are more options to the async storage.
		networking: {},
		editor: false, // there are more options to editor
		errors: { veto: stackFrame => false }, // or turn it off with false
	})
	.setAsyncStorageHandler(AsyncStorage)
	.use(reactotronRedux())
	.connect()

// swizzle the old one
// const yeOldeConsoleLog = console.log

// make a new one

// swizzle the old one
const yeOldeConsoleLog = console.log

// make a new one
console.log = (...args) => {
	// always call the old one, because React Native does magic swizzling too
	yeOldeConsoleLog(...args)

	// send this off to Reactotron.
	Reactotron.display({
		name: 'CONSOLE.LOG',
		important: true,
		value: args,
		preview: args.length ? JSON.stringify(args) : args[0],
	})
}

export default reactron
