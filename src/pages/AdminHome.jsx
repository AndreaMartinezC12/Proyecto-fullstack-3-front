import { useNavigate } from "react-router-dom";
import './Home.css'

export default function AdminHome(){
    const navigate = useNavigate()
    const user= JSON.parse(localStorage.getItem('user'))

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }

    return(
        <div className = "home-container">
            <div className="hero-header">
                <img
                    src="/image-hero2.png"
                    alt="Pastel"
                    className="hero-image"
                />
                <h1 className="hero-title">Cake-To-Go</h1>
                <h4 className="hero-subtitle">Sistema para la creacion y busqueda de pedidos</h4>               
            </div>

            <h3>Administrador</h3>
            <p>Bienvenido: {user?.nombre} </p>
            <p>Email: {user?.email}</p>

            <div className="button-container">
                <button className="home-button" onClick={() => navigate("/search-order")}>
                    Buscar Pedido
                </button>
            </div>

            <button onClick={logout}>
                Cerrar sesion
            </button>

            
        </div>
    )
}