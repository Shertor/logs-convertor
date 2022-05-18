import React from 'react'
import './SaveResult.css'
import { save_file } from '../utils'

export default function SaveResult() {
	function onResultBtn() {
		save_file().then(console.log)
	}

	return (
		<div className="save-btn_wrapper">
			<button onClick={onResultBtn} className="save-btn">
				Сохранить
			</button>
		</div>
	)
}
