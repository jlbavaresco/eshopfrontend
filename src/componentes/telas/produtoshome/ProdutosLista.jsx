import { useContext } from "react";
import ProdutosHomeContext from "./ProdutosHomeContext";
import { formatoMoeda } from "../../comuns/Uteis";

function ProdutosLista() {

    const { produtos, exibirDetalhesProduto, setExibeDetalhe } = useContext(ProdutosHomeContext);

    return (
        <div className="row ">

            {produtos.length > 0 && (

                produtos.map(objeto => (

                    <div className="col-sm-3">
                        <div className="card mb-3 text-center">
                            <div className="card-header">
                                {objeto.nome}
                            </div>
                            <div className="card-body ">
                                <h5 className="card-title">{objeto.nome}</h5>
                                <p className="card-text">{objeto.descricao}</p>
                                <p className="card-text"><small className="text-muted">Preço: {formatoMoeda(objeto.valor)}</small></p>
                                <p className="card-text"><small className="text-muted">Categoria: {objeto.categoria_nome}</small></p>
                                <p className="card-text"><small className="text-muted">Estoque: {objeto.quantidade_estoque}</small></p>
                            </div>
                            <div class="card-footer text-muted">
                            <button type="button" className="btn" onClick={() => exibirDetalhesProduto(objeto)}>Avaliações do produto</button>
                            </div>
                        </div>
                    </div>

                ))

            )}
        </div>
    )
}

export default ProdutosLista;