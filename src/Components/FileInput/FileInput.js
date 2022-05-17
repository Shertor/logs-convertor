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
	}

	handleChange(event) {
		console.log(this.fileInput.current.files)
		if (this.fileInput.current.files.length > 0) {
			this.setState({ isLoaded: true })
		} else {
			this.setState({ isLoaded: false })
		}

		// if (event.target.value) {
		// 	this.setState({ isLoaded: true })
		// 	console.log(this.state.isLoaded)
		// 	// fileInputHandler.bind(null, this.files)
		// }
	}

	render() {
		return (
			<React.Fragment>
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
			</React.Fragment>
		)
	}
}
