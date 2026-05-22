import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/authApi";

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

            navigate('/Home')
        }catch(error){
            setMensaje(error.response?.data?.error || 'Error al iniciar sesion')
        }
    }

    return(
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Contrasena"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />

            <button type="submit">Entrar</button>
            <button onClick={() => navigate("/")}>
                    Regresar
            </button>
        </form>

        {mensaje && <p>{mensaje}</p>}
    </div>
    )
}

