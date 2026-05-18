import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './SearchOrder.css'

export default function SearchOrder(){
    const[searchBy, setSearchBy] = useState("nombre")
    const[searchText, setSearchText] = useState("")
    const[result, setResult] = useState(null)
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState("")
    const navigate = useNavigate()

    const handleSearch = async(e) =>{
        e.preventDefault()

        setLoading(true)
        setError("")

        try {
            // EXPRESS CONNECTION
            const response = await axios.get(
            `http://localhost:3015/pedido/search?${searchBy}=${searchText}`
            // `https://proyecto-fullstack-3-express.vercel.app/pedido/search?nombre=${searchText}`
            );

            setResult(response.data);
            setLoading(false)

        } catch (error) {
            setError("No existe un pedido con ese dato")
            setLoading(false)
        }
    }

    const handleDelete = async(pedidoId) =>{
        const confirmDelete = window.confirm(
            "Estas seguro que deseas eliminar este pedido?"
        )

        if(!confirmDelete){
            return
        }

        try {
            //INTEGRACION EXPRESS:
            console.log("entre al borrado")
            console.log(pedidoId)

            await axios.delete(
            `http://localhost:3015/pedido/${pedidoId}`
            );

            alert("Pedido eliminado")
            setResult(null)
        } catch (error) {
            alert("Error eliminando pedido")
        }
    }

    return(
        <div className = "container">
            <button 
                onClick={()=>navigate("/")}
                className="home-button"
            >
            Volver al inicio
            </button>
            <div className = "card">
                <h1>Buscar pedido</h1>
                <label className = "label">Buscar por:</label>
                <select
                    value={searchBy}
                    onChange={(e)=>setSearchBy(e.target.value)}
                    className = "input"
                >
                    <option value="nombre">
                        Nombre
                    </option>
                    <option value="email">
                        Email
                    </option>
                    <option value="telefono">
                        Telefono
                    </option>
                </select>

                <label className = "label">Buscar</label>
                <input
                    type="text"
                    placeholder="Ingrese termino de busqueda"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="input"
                />

                <button onClick={handleSearch} className="search-button">Buscar</button>

                {loading &&(
                    <p>Buscando...</p>
                )}

                {error &&(
                    <p className="error">{error}</p>
                )}
            </div>

            {result &&(
                <div className="result-card">
                    <h2>Resultado de la busqueda</h2>
                    <div className="section">
                        <h3>Informacion del cliente</h3>
                        <p>Nombre: {" "} {result.cliente.nombre}</p>
                        <p>Email: {" "} {result.cliente.email}</p>
                        <p>Telefono: {" "} {result.cliente.telefono}</p>
                    </div>
                    <div className="section">
                        <h3>Informacion del destinatario</h3>
                        <p>Nombre:{" "}{result.destinatario.nombre}</p>
                        <p>Direccion:
                            {" "}{result.destinatario.calle}
                            {" "}{result.destinatario.numero}
                            {" "}{result.destinatario.colonia}
                        </p>
                    </div>
                    <div className="section">
                        <h3>Detalles del pastel</h3>
                        <p>Tamano: {" "} {result.pastel.tamano}</p>
                        <p>Pan: {" "} {result.pastel.pan}</p>
                        <p>Relleno: {" "} {result.pastel.relleno}</p>
                        <p>Extras: {" "} {result.pastel.extras}</p>
                        <p>Color del betun: {" "} {result.pastel.betun}</p>
                        <p>Decoracion: {" "} {result.pastel.decoracion}</p>
                    </div>
                    <div className="section">
                        <h3>Pago</h3>
                        <p>Total: {" "}${result.pago.total}</p>
                        <p>Metodo de pago: {" "} {result.pago.metodo}</p>
                    </div>
                    <button
                        onClick={()=>handleDelete(result.pedidoId)}
                        className="delete-button"
                    >
                        Eliminar pedido
                    </button>

                    <button
                        onClick={() => navigate(`/edit-order/${result.pedidoId}`)}
                        className="delete-button"
                    >
                        Editar pedido
                    </button>
                </div>
            )}
        </div>
    )
}