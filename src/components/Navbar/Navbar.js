import './Navbar.css'
import logog from './assets/logog.svg'


import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {


    return (
        <nav className="Navbar">
            <div>
                <h1>Ecommerce</h1>
                <img className="img" src={logog} alt='logo'/>
            </div>
            <div style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>

                        <a className="aNav nav-link active" href="./sections/historia.html">Historia</a>
                        <a className="aNav nav-link active" href="./sections/botanicos.html">Botánicos</a>
                        <a className="aNav nav-link active" href="./sections/servicios.html">Servicios</a>
                        <a className="aNav nav-link active" href="./sections/contacto.html">Contacto</a>

            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar