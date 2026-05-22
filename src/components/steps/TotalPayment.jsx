export default function Payment({pago, handleChange, nextStep, prevStep}){
    return(
        <div className="order-card">
            <h2 class = "order-title">Metodo de pago</h2>
            <h3>Total: $150 pesos</h3>
            <div className="radio-group">
                <label className={
                    pago.metodo === "tarjeta"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "metodo"
                        value = "tarjeta"
                        checked = {pago.metodo === "tarjeta"}
                        onChange={handleChange}
                    />
                        Tarjeta
                </label>

                <label className={
                    pago.metodo === "efectivo"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "metodo"
                        value = "efectivo"
                        checked = {pago.metodo === "efectivo"}
                        onChange={handleChange}
                    />
                        Efectivo
                </label>

                <label className={
                    pago.metodo === "transferencia"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "metodo"
                        value = "transferencia"
                        checked = {pago.metodo === "transferencia"}
                        onChange={handleChange}
                    />
                        Transferencia
                </label>     
            </div>

            <div className="button-row">
                <button className="step-button" onClick={prevStep}>
                    Atras
                </button>

                <button className="step-button" onClick={nextStep}>
                    Revisar pedido
                </button>
            </div>
            
        </div>
    )
}