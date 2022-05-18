import React, { useContext } from 'react'
import './FileInput.css'
import Context from '../../context'
import { file_parser_py } from '../utils'

function FileInput() {
	const { isLoadingContext } = useContext(Context)
	const { isParsedContext } = useContext(Context)
	const { isSuccessContext } = useContext(Context)
	const [isLoading, setIsLoading] = React.useState(false)
	const [file, setFile] = React.useState([])

	let fileInput = React.createRef()

	function updateLoading(value) {
		setIsLoading(value)
		isLoadingContext(value)
	}

	function updateFile(file) {
		console.log(file)
		if (file) {
			setFile(file)
			updateLoading(true)
			file_parser_py(file)
				.then(isSuccessContext)
				.finally(() => {
					isParsedContext(true)
					updateLoading(false)
				})
		} else {
			setFile([])
			updateLoading(false)
			isParsedContext(false)
			isSuccessContext(false)
		}
	}

	function handleChange() {
		console.log(fileInput.current.files)
		if (fileInput.current.files && fileInput.current.files.length > 0) {
			updateFile(fileInput.current.files[0])
		} else {
			updateFile(null)
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
					{isLoading ? (
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
						disabled={isLoading}
					/>

					<label className="field__file-wrapper" htmlFor="field__file-2">
						{isLoading ? (
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
