// Modal as a separate component
'use client'
import { useEffect, useRef } from 'react'
import styles from './modal.module.scss'


export default function Modal({openModal, closeModal, children}: {
  children: React.ReactNode
  openModal: boolean
  closeModal: () => void
}) {
	const ref = useRef<HTMLDialogElement>(null)
	useEffect(() => {
		if (openModal) {
			ref.current?.showModal()
		} else {
			ref.current?.close()
		}
	}, [openModal])

	let active = `${styles.active} ${styles.modal}`

	return (
		<dialog className={`${styles.modal} ${openModal ? active : ''}`} ref={ref} onCancel={closeModal}>
			{children}
			<button className={styles.close} onClick={closeModal}>&#x2718;</button>
		</dialog>
	)
}

// export default Modal
