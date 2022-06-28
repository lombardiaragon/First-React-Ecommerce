import './Modal.scss'

const Modal=({showCartModal,setShowCartModal,children})=>{

    return(
        <section className="modal">
            <div className='divModal'>
                {/* <img src='./shoppingOnline.svg' alt='shopping'/>
                <p>descripcion</p> */}
                {children}
                <button className="closeModal" onClick={()=>setShowCartModal(!showCartModal)}>X</button>
            </div>
        </section>
    )
}

export default Modal