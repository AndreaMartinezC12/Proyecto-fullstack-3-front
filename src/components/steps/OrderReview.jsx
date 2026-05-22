export default function OrderReview({orderData, prevStep, handleSubmit}){
    return(
        <div className="order-card">
            <h2 class = "order-title">Detalles del pedido</h2>
            <h3>Cliente</h3>
            <p>Nombre: {orderData.cliente.nombre}</p>
            <p>Email: {orderData.cliente.email}</p>
            <p>Telefono: {orderData.cliente.telefono}</p>

            <h3>Destinatario</h3>
            <p>Nombre: {orderData.destinatario.nombre}</p>
            <p>Direccion: {orderData.destinatario.calle} {orderData.destinatario.numero} {orderData.destinatario.colonia}</p>
            <p>Fecha de entrega: {orderData.destinatario.fechaEntrega}</p>

            <h3>Caracteristicas del pastel</h3>
            <p>Tamaño: {orderData.pastel.tamano}</p>
            <p>Sabor del pan: {orderData.pastel.pan}</p>
            <p>Relleno: {orderData.pastel.relleno}</p>
            <p>Extras: {orderData.pastel.extras}</p>
            <p>Color del betun: {orderData.pastel.betun}</p>
            <p>Descripcion de la decoracion: {orderData.pastel.decoracion}</p>
            
            <h3>Metodo de pago</h3>
            <p>Metodo de pago: {orderData.pago.metodo}</p>
            <p>Total por pagar: $150</p>

            <div className="button-row">
                <button className="step-button" onClick={prevStep}>
                    Atras
                </button>
                <button className="step-button" onClick={handleSubmit}>
                    Guardar pedido
                </button>
            </div>

            
        </div>
    )
}