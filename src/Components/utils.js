import { eel } from '../App'

async function py_test(text) {
	await eel.say_hello_py(text)()
	console.log('from py_test : ' + text)
}

export default py_test
