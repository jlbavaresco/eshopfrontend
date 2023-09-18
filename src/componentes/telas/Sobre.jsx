import { NavLink } from "react-router-dom";

function Sobre() {
    return (
        <div style={{ padding: '20px' }}>
            <div className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 >Sobre...</h1>
                    <p className="fs-3">Data da versão: 18/09/2023</p>
                    <p className="lead">
                        Sistema desenvolvido para estudo do React
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre;