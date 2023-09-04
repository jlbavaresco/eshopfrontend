import Autenticacao from "../componentes/seguranca/Autenticacao";


export const getProdutosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/produto`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    const data = await response.json()
    return data;
}

export const getProdutoPorCodigoAPI = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/produto/${codigo}`,
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

export const deleteProdutoPorCodigoAPI = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/produto/${codigo}`,
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

export const cadastraProdutoAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/produto`, {
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

