import React from 'react'
import './FileInput.css'

export default class FileInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoaded: false,
		}
		this.fileInput = React.createRef()
		this.handleChange = this.handleChange.bind(this)
		this.dropHandler = this.dropHandler.bind(this)
		this.dragOverHandler = this.dragOverHandler.bind(this)
	}

	handleChange(event) {
		console.log(this.fileInput.current.files)
		if (
			this.fileInput.current.files &&
			this.fileInput.current.files.length > 0
		) {
			this.setState({ isLoaded: true })
		} else {
			this.setState({ isLoaded: false })
		}
	}

	dropHandler(event) {
		console.log('File(s) dropped')
		event.preventDefault()

		if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
			console.log(event.dataTransfer.files[0])
			this.fileInput.current.files = event.dataTransfer.files
			this.handleChange()
		}
	}

	dragOverHandler(event) {
		console.log('File(s) in drop zone')
		event.preventDefault()
	}

	render() {
		return (
			<React.Fragment>
				<div className="file_input">
					<div
						id="drop_zone"
						onDrop={this.dropHandler}
						onDragOver={this.dragOverHandler}
					>
						{this.state.isLoaded ? (
							<div>
								<p>{this.fileInput.current.files[0].name}</p>
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
							ref={this.fileInput}
							id="field__file-2"
							className="field field__file"
							onChange={this.handleChange}
						/>

						<label className="field__file-wrapper" htmlFor="field__file-2">
							{this.state.isLoaded ? (
								<div className="field__file-fake">
									{this.fileInput.current.files[0].name}
								</div>
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
}
