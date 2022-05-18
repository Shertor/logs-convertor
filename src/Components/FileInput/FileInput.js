import React, { useContext } from 'react'
import './FileInput.css'
import Context from '../../context'
import { file_parser_py } from '../utils'

function FileInput() {
	const { loading, setLoading } = useContext(Context)
	const { isSuccessContext } = useContext(Context)
	const { parsed, setParsed } = useContext(Context)

	const [file, setFile] = React.useState([])

	let fileInput = React.createRef()

	function updateFile(file) {
		if (file) {
			setFile(file)
			setLoading(true)
			file_parser_py(file)
				.then(isSuccessContext)
				.finally(() => {
					setParsed(true)
					setLoading(false)
				})
		} else {
			setFile([])
			setLoading(false)
			setParsed(false)
			isSuccessContext(false)
		}
	}

	function handleChange() {
		if (fileInput.current.files && fileInput.current.files.length > 0) {
			updateFile(fileInput.current.files[0])
		} else {
			updateFile(null)
		}
	}

	function dropHandler(event) {
		// console.log('File(s) dropped')
		event.preventDefault()
		if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
			console.log(event.dataTransfer.files[0])
			fileInput.current.files = event.dataTransfer.files
			handleChange()
		}
	}

	function dragOverHandler(event) {
		// console.log('File(s) in drop zone')
		event.preventDefault()
	}

	return (
		<React.Fragment>
			<div className="file_input">
				<div id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
					{loading || parsed ? (
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
						disabled={loading}
					/>

					<label className="field__file-wrapper" htmlFor="field__file-2">
						{loading || parsed ? (
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
