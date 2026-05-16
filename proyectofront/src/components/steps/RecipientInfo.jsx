export default function RecipientInfo({destinatario, handleChange, nextStep, prevStep}){
    return(
        <div>
            <h2>Datos del destinatario</h2>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre del destinatario"
                value={destinatario.nombre}
                onChange={handleChange}
            />

            <input
                type="text"
                name="calle"
                placeholder="Nombre de la calle"
                value={destinatario.calle}
                onChange={handleChange}
            />

            <input
                type="text"
                name="numero"
                placeholder="Numero de la casa"
                value={destinatario.numero}
                onChange={handleChange}
            />

            <input
                type="text"
                name="colonia"
                placeholder="Nombre de la colonia"
                value={destinatario.colonia}
                onChange={handleChange}
            />

            <button onClick={prevStep}>
                Atras
            </button>

            <button onClick={nextStep}>
                Siguiente
            </button>
           
        </div>
    )
}