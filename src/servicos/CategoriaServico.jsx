import Autenticacao from "../componentes/seguranca/Autenticacao";

export const getCategoriasAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/categoria`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": Autenticacao.pegaAutenticacao().token
            }
        })
    const data = await response.json()
    return data;
}

export const getCategoriaPorCodigoAPI = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/categoria/${codigo}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": Autenticacao.pegaAutenticacao().token
            }
        });
    const data = await response.json();
    return data;
}

export const deleteCategoriaPorCodigoAPI = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/categoria/${codigo}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": Autenticacao.pegaAutenticacao().token
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraCategoriaAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/categoria`, {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
            "authorization": Autenticacao.pegaAutenticacao().token
        },
        body: JSON.stringify(objeto),
    })
    const data = await response.json();
    return data;

}

