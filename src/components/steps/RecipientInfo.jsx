export default function RecipientInfo({destinatario, handleChange, nextStep, prevStep}){
    return(
        <div className="order-card">
            <h2 class = "order-title">Datos del destinatario</h2>
            <p className="order-step">Nombre de quien recibe el pastel</p>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre del destinatario"
                value={destinatario.nombre}
                onChange={handleChange}
                className="text-input"
            />
            <p className="order-step">Calle</p>
            <input
                type="text"
                name="calle"
                placeholder="Nombre de la calle"
                value={destinatario.calle}
                onChange={handleChange}
                className="text-input"
            />
            <p className="order-step">Numero</p>
            <input
                type="text"
                name="numero"
                placeholder="Numero de la casa"
                value={destinatario.numero}
                onChange={handleChange}
                className="text-input"
            />
            <p className="order-step">Colonia</p>
            <input
                type="text"
                name="colonia"
                placeholder="Nombre de la colonia"
                value={destinatario.colonia}
                onChange={handleChange}
                className="text-input"
            />
            <p className="order-step">Fecha de entrega del pastel</p>
            <input
                type="date"
                name="fechaEntrega"
                placeholder="Fecha de entrega"
                value={destinatario.fechaEntrega.split("T")[0]}
                onChange={handleChange}
                className="text-input"
            />

            <div className="button-row">
                <button className="step-button" onClick={prevStep}>
                    Atras
                </button>

                <button className="step-button" onClick={nextStep}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}