import React from 'react'
import './App.css'
import FileInput from './Components/FileInput/FileInput'
import Loader from './Components/Loader/Loader'
import LoadingContext from './context'

function App() {
	const [loading, setLoading] = React.useState(false)

	function isLoadedContext(loaded) {
		setLoading(loaded)
	}

	return (
		<LoadingContext.Provider value={{ isLoadedContext }}>
			<div className="body_wrapper">
				<FileInput></FileInput>
				{loading ? <h3>Идет обработка</h3> : <h3>Ожидание файла</h3>}
				{loading && <Loader />}
			</div>
		</LoadingContext.Provider>
	)
}

export default App
