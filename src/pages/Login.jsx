import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/authApi";
import { jwtDecode } from "jwt-decode";


export default function Login(){
    const navigate = useNavigate()
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[mensaje, setMensaje] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try{
            const data = await loginRequest(email,password)

            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

            const decoded = jwtDecode(data.token)

            if (decoded.role !== 'admin'){
                navigate('/mi-pedido')
            }
            else{
                navigate('/admin-home')
            }
        }catch(error){
            setMensaje(error.response?.data?.error || 'Error al iniciar sesion')
        }
    }

    return(
    <div className="login-container">
        <form className = "login-card" onSubmit={handleSubmit}>
            <h1 className="login-title">Ingresar</h1>
            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className="login-input"
            />

            <input
                type="password"
                placeholder="Contrasena"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className="login-input"
            />

            <button type="submit" className="login-button">Entrar</button>
            <button className="back-button" onClick={() => navigate("/")}>
                    Regresar
            </button>
        </form>

        {mensaje && <p>{mensaje}</p>}
    </div>
    )
}

