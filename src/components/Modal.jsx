import { useState, useEffect, useRef } from 'react'
import styles from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'

function Modal({children, showModal, setShowModal}) {
    // const [showModal, setShowModal] = useState(false)

    const modalRef = useRef()
    //used to reference the DOM element of the modal
    //used to detect clicks outside the modal, which can be useful for closing 
    //the modal when clicking outside of it.

    useClickOutside(modalRef, showModal, () => setShowModal(false))

    return (
        <div>
            <div className={styles.overlay}>  {/* provides a semi-transparent background. */}
                    <div
                        ref={modalRef}
                        className={styles.modal}
                    >
                        <div className={styles.modalContent}>
                            {children}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Modal

//memo1
//useClickOutside hook to handle clicks outside the modal. 
//The useClickOutside hook takes three arguments: the ref of the element to track for clicks outside (in this case, modalRef), 
//the current value of showModal state variable, and a callback function to be called 
//when a click outside the element is detected. The callback function, () => setShowModal(false), 
//is passed as the third argument, and it sets the showModal state to false when a click outside the modal is detected.

//memo2
//The modal content is wrapped in a div element with the class name styles.modal, 
//and the modalRef is attached to it using the ref attribute, allowing it to be referenced 
//in the custom useClickOutside hook.