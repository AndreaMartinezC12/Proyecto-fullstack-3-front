export default function OrderReview({orderData, prevStep, handleSubmit}){
    return(
        <div>
            <h2>Detalles del pedido</h2>
            <h3>Cliente</h3>
            <p>{orderData.cliente.nombre}</p>

            <h3>Destinatario</h3>
            <p>{orderData.destinatario.nombre}</p>

            <h3>Caracteristicas del pastel</h3>
            <p>{orderData.pastel.pan}</p>
            
            <h3>Metodo de pago</h3>
            <p>{orderData.pago.metodo}</p>

            <button onClick={prevStep}>
                Atras
            </button>

            <button onClick={handleSubmit}>
                Guardar pedido
            </button>
        </div>
    )
}