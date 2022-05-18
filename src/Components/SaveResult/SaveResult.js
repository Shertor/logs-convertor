import React from 'react'
import './SaveResult.css'

export default function SaveResult() {
	function onResultBtn() {
		console.log('hi')
	}

	return (
		<div className="save-btn_wrapper">
			<button onClick={onResultBtn} className="save-btn">
				Сохранить
			</button>
		</div>
	)
}
