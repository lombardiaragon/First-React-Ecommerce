import '../../scss/index.scss'


const Modal=({showCartModal,setShowCartModal,children})=>{

    return(
        <section className="modal">
            <div className='divModal'>
                {children}
                <button className="closeModal" onClick={()=>setShowCartModal(!showCartModal)}>X</button>
            </div>
        </section>
    )
}

export default Modal