import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3">Página não encontrada.</p>
                    <p className="lead">
                        O recurso que você está procurando não existe
                    </p>
                    <NavLink exact="true" to="/" className="btn btn-primary">Ir para página inicial</NavLink>                    
                </div>
            </div>
        </>
    )
}

export default NotFound;