import React from 'react'
import './App.css'
import FileInput from './Components/FileInput/FileInput'
import Loader from './Components/Loader/Loader'
import SaveResult from './Components/SaveResult/SaveResult'
import Context from './context'

export const eel = window.eel
eel.set_host('ws://localhost:8080')

function App() {
	const [loading, setLoading] = React.useState(false)
	const [parsed, setParsed] = React.useState(false)
	const [success, setSuccess] = React.useState(false)

	function isSuccessContext(success) {
		setSuccess(success)
	}

	return (
		<Context.Provider
			value={{ loading, setLoading, isSuccessContext, parsed, setParsed }}
		>
			<div className="body_wrapper">
				<FileInput></FileInput>

				{parsed ? (
					success ? (
						<h3>Файл успешно обработан</h3>
					) : (
						<h3 style={{ color: 'red' }}>Ошибка обработки файла </h3>
					)
				) : loading ? (
					<h3>Идет обработка</h3>
				) : (
					<h3>Ожидание файла</h3>
				)}

				{parsed ? null : loading ? <Loader /> : null}

				{success ? <SaveResult /> : null}
			</div>
		</Context.Provider>
	)
}

export default App
