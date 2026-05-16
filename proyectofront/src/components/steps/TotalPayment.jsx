export default function Payment({pago, handleChange, nextStep, prevStep}){
    return(
        <div>
            <h2>Metodo de pago</h2>
            <h3>Total: $150 pesos</h3>
            <select
                name="metodo"
                value={pago.metodo}
                onChange={handleChange}
            >
                <option value="">Metodo de pago</option>
                <option value="tarjeta">Tarjeta</option>
                <option value="efectivo">Efectivo</option>
                <option value="transferencia">Transferencia</option>
            </select>

            
            <button onClick={prevStep}>
                Atras
            </button>

            <button onClick={nextStep}>
                Revisar pedido
            </button>
        </div>
    )
}