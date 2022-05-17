import React from 'react'
import './Loader.css'

export default function Loader() {
	return (
		<React.Fragment>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					margin: '.5rem',
				}}
			>
				<div className="lds-spinner" style={{ transform: 'scale(0.5)' }}>
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		</React.Fragment>
	)
}
