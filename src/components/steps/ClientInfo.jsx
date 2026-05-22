export default function ClientInfo({cliente, handleChange, nextStep}){
    return(
        <div className="order-card">
            <header class = "order-title">
                <h2>Datos del cliente</h2>
            </header>
            <p className="order-step">Ingrese su nombre y apellido</p>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre del cliente"
                value={cliente.nombre}
                onChange={handleChange}
                className="text-input"
            />
            <p className="order-step">Ingrese su correo electronico</p>
            <input
                type="email"
                name="email"
                placeholder="Email del cliente"
                value={cliente.email}
                onChange={handleChange}
                className="text-input"
            />

            <p className="order-step">Ingrese su numero de telefono</p>
            <input
                type="text"
                name="telefono"
                placeholder="Telefono del cliente"
                value={cliente.telefono}
                onChange={handleChange}
                className="text-input"
            />

            <div className="button-row">
                <button className="step-button" onClick={nextStep}>
                    Siguiente
                </button>
            </div>
            
        </div>
    )
}