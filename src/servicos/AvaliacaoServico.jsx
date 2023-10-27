export const getAvalicaoesProdutoAPI = async (codigoproduto) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/avaliacao/produto/${codigoproduto}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    const data = await response.json()
    return data;
}


export const cadastraAvaliacaoAPI = async (avaliacao) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/avaliacao`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(avaliacao),
    })
    const data = await response.json();
    return data;
}