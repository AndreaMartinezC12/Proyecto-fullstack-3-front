export default function ClientInfo({cliente, handleChange, nextStep}){
    return(
        <div>
            <h2>Datos del cliente</h2>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre del cliente"
                value={cliente.nombre}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email del cliente"
                value={cliente.email}
                onChange={handleChange}
            />

            <input
                type="text"
                name="telefono"
                placeholder="Telefono del cliente"
                value={cliente.telefono}
                onChange={handleChange}
            />

            <button onClick={nextStep}>
                Siguiente
            </button>
        </div>
    )
}