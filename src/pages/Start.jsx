import { useNavigate } from "react-router-dom";

export default function Start(){
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
                <button className="home-button" onClick={() => navigate("/login")}>
                    Ingresar
                </button>
                <button className="home-button" onClick={() => navigate("/register")}>
                    Registrarse
                </button>
            </div>

            
        </div>
    )
}