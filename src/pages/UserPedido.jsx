import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

export default function UserPedido(){
    const[pedido, setPedido] = useState(null)
    const navigate = useNavigate()
    const user= JSON.parse(localStorage.getItem('user'))

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }

    useEffect(() => {
        const getPedido = async() => {
            try {
                console.log("si entre a get pedido")
                const response = await api.get('/pedido/my-pedido')
                console.log("si hice el query")
                console.log(response.data)
                setPedido(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPedido()
    },[])

    // if(!pedido){
    //     return <p>Cargando...</p>
    // }

    return(
        <div className="home-container">    
                <h2 className="welcome-title">Bienvenido: {user?.nombre} </h2>
                <p className="user-email">Email: {user?.email}</p>
                {!pedido && (
                    <div className="home-card">
                        <h2 className="empty-message">Aun no has hecho un pedido</h2>
                        <button className="create-button" onClick={() => navigate("/new-order")}>
                            Nuevo Pedido
                        </button>
                    </div>
                )}

                {pedido &&(
                    <div className="result-card">
                        <h2 className="order-title">Resultado de la busqueda</h2>
                        <div className="section">
                            <h3>Informacion del cliente</h3>
                            <p>Nombre: {" "} {pedido.cliente.nombre}</p>
                            <p>Email: {" "} {pedido.cliente.email}</p>
                            <p>Telefono: {" "} {pedido.cliente.telefono}</p>
                        </div>
                        <div className="section">
                            <h3>Informacion del destinatario</h3>
                            <p>Nombre:{" "}{pedido.destinatario.nombre}</p>
                            <p>Direccion:
                                {" "}{pedido.destinatario.calle}
                                {" "}{pedido.destinatario.numero}
                                {" "}{pedido.destinatario.colonia}
                            </p>
                            <p>Fecha de entrega: {" "}{pedido.destinatario.fechaEntrega}</p>
                        </div>
                        <div className="section">
                            <h3>Detalles del pastel</h3>
                            <p>Tamano: {" "} {pedido.pastel.tamano}</p>
                            <p>Pan: {" "} {pedido.pastel.pan}</p>
                            <p>Relleno: {" "} {pedido.pastel.relleno}</p>
                            <p>Extras: {" "} {pedido.pastel.extras}</p>
                            <p>Color del betun: {" "} {pedido.pastel.betun}</p>
                            <p>Decoracion: {" "} {pedido.pastel.decoracion}</p>
                        </div>
                        <div className="section">
                            <h3>Pago</h3>
                            <p>Total: {" "}$250</p>
                            <p>Metodo de pago: {" "}{pedido.pago.metodo}</p>
                        </div>

                        <button
                            onClick={() => navigate(`/edit-order/${pedido.pedidoId}`)}
                            className="step-button"
                        >
                            Editar pedido
                        </button>

                    </div>
                )}

            <button className= "logout-button" onClick={logout}>
                Cerrar sesion
            </button>
            
        </div>
    )





}