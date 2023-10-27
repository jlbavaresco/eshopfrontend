import { useContext } from "react";
import ProdutosHomeContext from "./ProdutosHomeContext";
import { formatoMoeda } from '../../comuns/Uteis';
import FormAvaliacao from "./FormAvaliacao";

function ProdutoDetalhe() {

    const { produto, setExibeDetalhe, avaliacoes,
        avaliacao, novaAvaliacao, cadastrarAvaliacao, alerta } = useContext(ProdutosHomeContext);

    return (
        <>
            <div className="row">
                <div class="d-flex align-items-center justify-content-center">
                    <div className="col-sm-3">
                        <div className="card mb-3 text-center">
                            <div className="card-header">
                                {produto.nome}
                            </div>
                            <div className="card-body ">
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text">{produto.descricao}</p>
                                <p className="card-text"><small className="text-muted">Preço: {formatoMoeda(produto.valor)}</small></p>
                                <p className="card-text"><small className="text-muted">Categoria: {produto.categoria_nome}</small></p>
                                <p className="card-text"><small className="text-muted">Estoque: {produto.quantidade_estoque}</small></p>
                            </div>
                            <div class="card-footer text-muted" >
                                <button type="button" className="btn" onClick={() => setExibeDetalhe(false)}>Voltar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAvaliacao"
                onClick={() => novaAvaliacao()}>
                Nova avaliacao <i className="bi bi-file-earmark-plus"></i>
            </button>
            <FormAvaliacao />
            <div className="accordion" id="listaAvaliacoes">
                {
                    avaliacoes.map(avaliacao => (
                        <div className="accordion-item" key={avaliacao.codigo}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${avaliacao.codigo}`} aria-expanded="false" aria-controls="collapseTwo">
                                    {avaliacao.texto}
                                </button>
                            </h2>
                            <div id={avaliacao.codigo} class="accordion-collapse collapse" data-bs-parent="#listaAvaliacoes">
                                <div className="accordion-body">
                                    <p>{avaliacao.texto}</p>
                                    <p>Autor: {avaliacao.autor}</p>
                                    <p>Email: {avaliacao.email}</p>
                                    <p>Nota: {avaliacao.nota}</p>
                                    <p>Data: {avaliacao.data}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default ProdutoDetalhe;