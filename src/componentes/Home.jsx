import { useEffect, useState } from 'react';
import { getProdutosAPI } from '../servicos/ProdutoServico';
import { formatoMoeda } from '../componentes/comuns/Uteis';
import Carregando from './comuns/Carregando';

const Home = () => {

    const [produtos, setProdutos] = useState([]);

    const [carregando, setCarregando] = useState(true);

    const recuperaProdutos = async () => {
        setCarregando(true);
        setProdutos(await getProdutosAPI());
        setCarregando(false);
    }

    useEffect(() => {
        recuperaProdutos();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Carregando carregando={carregando}>

                <div className="row">

                    {produtos.length > 0 && (

                        produtos.map(objeto => (

                            <div className="col-sm-3">
                                <div className="card mb-3">
                                    <div className="card-header">
                                        {objeto.nome}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{objeto.nome}</h5>
                                        <p className="card-text">{objeto.descricao}</p>
                                        <p className="card-text"><small className="text-muted">Preço: {formatoMoeda(objeto.valor)}</small></p>
                                        <p className="card-text"><small className="text-muted">Categoria: {objeto.categoria_nome}</small></p>
                                    </div>
                                    <div class="card-footer text-muted">
                                        Estoque: {objeto.quantidade_estoque}
                                    </div>
                                </div>
                            </div>

                        ))

                    )}
                </div>

            </Carregando>
        </div>
    );

};
export default Home;