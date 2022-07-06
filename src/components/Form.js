import '../scss/index.scss'
const Form=()=>{
    return(
        <div className='modalCart'>
                        <img src='./shopping.png' alt='shopping'/>
                        <form className='formCart' onSubmit={handleSubmit}>
                            <h3>Formulario de confirmacíon de compra</h3>
                            <input 
                            placeholder='Nombre y Apellido'
                            name='user'
                            value={formValue.name} 
                            onChange={handleChange}
                            required
                            />
                            <input
                            placeholder='Teléfono' 
                            name='phone'
                            value={formValue.phone} 
                            onChange={handleChange}
                            required
                            />
                            <input
                            placeholder='Dirección'
                            name='direction'
                            value={formValue.direction} 
                            onChange={handleChange}
                            required
                            />
                            <input
                            placeholder='Email' 
                            name='email'
                            value={formValue.email} 
                            onChange={handleChange}
                            required
                            pattern={`${formValue.validEmail}`}
                            />
                            <input
                            placeholder='Validar Email' 
                            name='validEmail'
                            value={formValue.validEmail} 
                            onChange={handleChange}
                            required
                            pattern={`${formValue.email}`}
                            />
                            <button type='submit' className='btnGlobal btnSendForm'>Realizar compra</button>
                        </form>
                    </div>
    )
}

export default Form