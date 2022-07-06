import '../scss/index.scss'
const HeaderLayout=({children})=>{
    return(
        <header className="headerLayout">
            <p className="infoHeader">
                Ayacucho 5500, Rosario, Santa Fe | ENVÍO GRATIS A TODO EL PAÍS en compras superiores a $10.000 | AHORA 6 CUOTAS SIN INTERÉS
            </p>
           {children}
        </header>
    )
}

export default HeaderLayout