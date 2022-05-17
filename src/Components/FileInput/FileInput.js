import React, { useContext } from 'react'
import './FileInput.css'
import LoadingContext from '../../context'

function FileInput() {
	const { isLoadedContext } = useContext(LoadingContext)
	const [isLoaded, setIsLoaded] = React.useState(false)
	const [file, setFile] = React.useState([])

	let fileInput = React.createRef()

	function handleChange(event) {
		console.log(fileInput.current.files)
		if (fileInput.current.files && fileInput.current.files.length > 0) {
			setIsLoaded(true)
			setFile(fileInput.current.files[0])
			isLoadedContext(true)
		} else {
			setIsLoaded(false)
			setFile([])
			isLoadedContext(false)
		}
	}

	function dropHandler(event) {
		console.log('File(s) dropped')
		event.preventDefault()

		if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
			console.log(event.dataTransfer.files[0])
			fileInput.current.files = event.dataTransfer.files
			handleChange()
		}
	}

	function dragOverHandler(event) {
		console.log('File(s) in drop zone')
		event.preventDefault()
	}

	return (
		<React.Fragment>
			<div className="file_input">
				<div id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
					{isLoaded ? (
						<div>
							<p>{file.name}</p>
							<p></p>
						</div>
					) : (
						<div>
							<p>Перетащите файл сюда</p>
							<p>или нажмите кнопку</p>
						</div>
					)}
				</div>
				<div className="field__wrapper">
					<input
						type="file"
						ref={fileInput}
						id="field__file-2"
						className="field field__file"
						onChange={handleChange}
					/>

					<label className="field__file-wrapper" htmlFor="field__file-2">
						{isLoaded ? (
							<div className="field__file-fake">{file.name}</div>
						) : (
							<div className="field__file-fake">Файл не выбран</div>
						)}
						<div className="field__file-button">Выбрать файл</div>
					</label>
				</div>
			</div>
		</React.Fragment>
	)
}

export default FileInput
