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
                // 'http://localhost:3015/auth/register',
                'https://proyecto-fullstack-3-express.vercel.app',
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
        <div className="login-container">
            <form className = "login-card" onSubmit={handleRegister}>
                <h1 className="login-title">Registra tu cuenta</h1>
                <input
                    type="text"
                    placeholder = "Nombre"
                    value = {nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="login-input"
                />

                <input
                    type="email"
                    placeholder = "Email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />

                <input
                    type="password"
                    placeholder = "Password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />

                <button type="submit" className="login-button">Registrarse</button>
                 <button className="back-button" type="button" onClick={() => navigate("/")}>
                        Regresar
                </button>
            </form>
        </div>
    )
}