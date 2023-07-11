
function CampoSelect(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id} className="form-label">
                {props.label}
            </label>
                <select
                    required={props.requerido}
                    className="form-control"
                    id={props.id}
                    value={props.value}
                    name={props.name}
                    onChange={props.onchange}>
                    <option disable="true" value="">({props.msginvalido})</option>
                    {props.children}
                </select>            
            <div className="valid-feedback">
                {props.msgvalido}
            </div>
            <div className="invalid-feedback">
                {props.msginvalido}
            </div>
        </div>
    )
}

export default CampoSelect;