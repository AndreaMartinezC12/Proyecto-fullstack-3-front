import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            await axios.post(
                'http://localhost:3015/auth/register',
                {
                    nombre,
                    email,
                    password
                }
            )

            alert('Usuario creado correctamente')
        } catch (error) {
            console.log(error)
            alert('Error al crear usuario')
        }
    }

    return(
        <form onSubmit={handleRegister}>
            <h2>Registra tu cuenta</h2>
            <input
                type="text"
                placeholder = "Nombre"
                value = {nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                type="email"
                placeholder = "Email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder = "Password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Registrarse</button>
             <button type="button" onClick={() => navigate("/")}>
                    Regresar
            </button>
        </form>
    )
}