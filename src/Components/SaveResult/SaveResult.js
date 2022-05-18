import React, { useState } from 'react'
import './SaveResult.css'
import { save_file } from '../utils'

export default function SaveResult() {
	const [isOpen, setIsOpen] = useState(false)
	const [isSaved, setIsSaved] = useState(false)

	function onResultBtn() {
		save_file()
			.then(setIsSaved)
			.finally(() => {
				setIsOpen(true)
			})
	}

	return (
		<React.Fragment>
			<div className="save-btn_wrapper">
				<button onClick={onResultBtn} className="save-btn">
					Сохранить
				</button>
			</div>
			{isOpen && (
				<div className="my-modal">
					<div className="my-modal-body">
						{isSaved ? (
							<h3>Сохранение прошло успешно</h3>
						) : (
							<h3>Ошибка сохранения</h3>
						)}
						<button onClick={() => setIsOpen(false)} className="save-btn">
							Закрыть
						</button>
					</div>
				</div>
			)}
		</React.Fragment>
	)
}
