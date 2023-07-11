
function CampoEntrada({ value, name, label,
    tipo, requerido, id, onchange,
    msgvalido, msginvalido, readonly, maxCaracteres }) {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type={tipo}
                required={requerido}
                className="form-control"
                id={id}
                name={name}
                value={value}
                onChange={onchange}
                readOnly={readonly}
                maxLength={maxCaracteres}
            />
            <div className="valid-feedback">
                {msgvalido}
            </div>

            <div className="invalid-feedback">
                {msginvalido}
            </div>
        </div>
    )
}

export default CampoEntrada;