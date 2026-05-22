export default function BuildCake({pastel, handleChange, nextStep, prevStep}){
    return(
        <div className="order-card">
            <h2 className="order-title">Selecciona las caracteristicas del pastel</h2>
            <p className="order-step">Selecciona el tamano del pastel</p>
            <div className="radio-group">
                <label className={
                    pastel.tamano === "mini"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "tamano"
                        value = "mini"
                        checked = {pastel.tamano === "mini"}
                        onChange={handleChange}
                    />
                        Mini (2-3 personas)
                </label>

                <label className={
                    pastel.tamano === "chico"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "tamano"
                        value = "chico"
                        checked = {pastel.tamano === "chico"}
                        onChange={handleChange}
                    />
                        Chico (4-5 personas)
                </label>

                <label className={
                    pastel.tamano === "mediano"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "tamano"
                        value = "mediano"
                        checked = {pastel.tamano === "mediano"}
                        onChange={handleChange}
                    />
                        Mediano (6-8 personas)
                </label>

                <label className={
                    pastel.tamano === "grande"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "tamano"
                        value = "grande"
                        checked = {pastel.tamano === "grande"}
                        onChange={handleChange}
                    />
                        Grande (10-12 personas)
                </label>
            </div>

            <p className="order-step">Selecciona el sabor del pan</p>
            <div className="radio-group">
                <label className={
                    pastel.pan === "vainilla"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "pan"
                        value = "vainilla"
                        checked = {pastel.pan === "vainilla"}
                        onChange={handleChange}
                    />
                        Vainilla
                </label>

                <label className={
                    pastel.pan === "chocolate"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "pan"
                        value = "chocolate"
                        checked = {pastel.pan === "chocolate"}
                        onChange={handleChange}
                    />
                        Chocolate
                </label>

                <label className={
                    pastel.pan === "zanahoria"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "pan"
                        value = "zanahoria"
                        checked = {pastel.pan === "zanahoria"}
                        onChange={handleChange}
                    />
                        Zanahoria
                </label>

                <label className={
                    pastel.pan === "tres leches"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "pan"
                        value = "tres leches"
                        checked = {pastel.pan === "tres leches"}
                        onChange={handleChange}
                    />
                        Tres leches
                </label>
            </div>

            <p className="order-step">Selecciona el tipo de relleno</p>
            <div className="radio-group">
                <label className={
                    pastel.relleno === "mermelada"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "relleno"
                        value = "mermelada"
                        checked = {pastel.relleno === "mermelada"}
                        onChange={handleChange}
                    />
                        Mermelada
                </label>

                <label className={
                    pastel.relleno === "queso crema"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "relleno"
                        value = "queso crema"
                        checked = {pastel.relleno === "queso crema"}
                        onChange={handleChange}
                    />
                        Queso crema
                </label>

                <label className={
                    pastel.relleno === "nutella"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "relleno"
                        value = "nutella"
                        checked = {pastel.relleno === "nutella"}
                        onChange={handleChange}
                    />
                        Nutella
                </label>

                <label className={
                    pastel.relleno === "cajeta"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "relleno"
                        value = "cajeta"
                        checked = {pastel.relleno === "cajeta"}
                        onChange={handleChange}
                    />
                        Cajeta
                </label>
            </div>

            <p className="order-step">Selecciona si quieres agregar un extra</p>
            <div className="radio-group">
                <label className={
                    pastel.extras === "ninguno"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "extras"
                        value = "ninguno"
                        checked = {pastel.extras === "ninguno"}
                        onChange={handleChange}
                    />
                        Ninguno
                </label>

                <label className={
                    pastel.extras === "nuez"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "extras"
                        value = "nuez"
                        checked = {pastel.extras === "nuez"}
                        onChange={handleChange}
                    />
                        Nuez
                </label>

                <label className={
                    pastel.extras === "almendras"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "extras"
                        value = "almendras"
                        checked = {pastel.extras === "almendras"}
                        onChange={handleChange}
                    />
                        Almendras
                </label>

                <label className={
                    pastel.extras === "chispas"
                    ? "radio-option selected"
                    : "radio-option"
                }>
                    <input
                        type = "radio"
                        name = "extras"
                        value = "chispas"
                        checked = {pastel.extras === "chispas"}
                        onChange={handleChange}
                    />
                        Chispas de chocolate
                </label>
            </div>

            <p className="order-step">Color del betun</p>
            <input
                type="text"
                name="betun"
                placeholder="Color para el betun"
                value={pastel.betun}
                onChange={handleChange}
                className="text-input"
            />

            <p className="order-step">Describe la decoracion que deseas</p>
            <input
                type="text"
                name="decoracion"
                placeholder="Decoracion para el pastel"
                value={pastel.decoracion}
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