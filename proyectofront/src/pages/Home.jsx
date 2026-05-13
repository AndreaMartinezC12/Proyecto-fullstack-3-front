import { useNavigate } from "react-router-dom";
import './Home.css'

export default function Home(){
    const navigate = useNavigate()

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

            <div className="button-container">
                <button className="home-button" onClick={() => navigate("/new-order")}>
                    Nuevo Pedido
                </button>
                <button className="home-button" onClick={() => navigate("/search-order")}>
                    Buscar Pedido
                </button>
            </div>

            
        </div>
    )
}