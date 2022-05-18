import { eel } from '../App'

async function py_test(text) {
	await eel.say_hello_py(text)()
	console.log('from py_test : ' + text)
}

const readFile = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = function () {
			const fileContent = reader.result
			console.log('Содержимое файла при чтении: ' + fileContent)
			if (fileContent) {
				resolve(fileContent)
			} else {
				reject('Файл пустой')
			}
		}
		reader.onerror = function (event) {
			reject('Файл не может быть прочитан! код ' + event.target.error.code)
		}
		reader.readAsText(file)
	})

async function file_parser_py(file) {
	let fileContent = null
	let isSuccess = false
	try {
		fileContent = await readFile(file)
	} catch (e) {
		console.log(e)
	} finally {
		if (fileContent) {
			isSuccess = await eel.file_parser_py(fileContent)()
			if (isSuccess) {
				console.log('Файл успешно обработан')
			} else {
				console.log('Ошибка обработки файла')
			}
		}
	}
	return isSuccess
}

async function save_file() {
	const isSuccess = await eel.save_file()()
	return isSuccess
}

export { file_parser_py }
export { save_file }

export default py_test
