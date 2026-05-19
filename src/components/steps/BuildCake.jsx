export default function BuildCake({pastel, handleChange, nextStep, prevStep}){
    return(
        <div>
            <h2>Selecciona las caracteristicas del pastel</h2>
            <select
                name="tamano"
                value={pastel.tamano}
                onChange={handleChange}
            >
                <option value="">Selecciona el tamano</option>
                <option value="mini">Mini (2-3 personas)</option>
                <option value="chico">Chico (4-5 personas)</option>
                <option value="mediano">Medianos (6-8 personas)</option>
                <option value="grande">Grande (10-12 personas)</option>
            </select>
            <select
                name="pan"
                value={pastel.pan}
                onChange={handleChange}
            >
                <option value="">Selecciona el sabor del pan</option>
                <option value="chocolate">Chocolate</option>
                <option value="vainilla">Vainilla</option>
                <option value="zanahoria">Zanahoria</option>
                <option value="Tres leches">Tres leches</option>
            </select>
            <select
                name="relleno"
                value={pastel.relleno}
                onChange={handleChange}
            >
                <option value="">Selecciona el tipo de relleno</option>
                <option value="mermelada">Mermelada</option>
                <option value="Queso crema">Queso crema</option>
                <option value="nutella">Nutella</option>
                <option value="cajeta">Cajeta</option>
            </select>
            <select
                name="extras"
                value={pastel.extras}
                onChange={handleChange}
            >
                <option value="">Selecciona si quieres agregar un extra</option>
                <option value="ninguno">Ninguno</option>
                <option value="nuez">Nuez</option>
                <option value="almendra">Almendras</option>
                <option value="chispas">Chispas de chocolate</option>
            </select>
            <input
                type="text"
                name="betun"
                placeholder="Color para el betun"
                value={pastel.betun}
                onChange={handleChange}
            />
            <input
                type="text"
                name="decoracion"
                placeholder="Decoracion para el pastel"
                value={pastel.decoracion}
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