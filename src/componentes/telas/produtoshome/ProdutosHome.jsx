import { useEffect, useState } from 'react';
import { getProdutosAPI } from '../../../servicos/ProdutoServico';
import { formatoMoeda } from '../../comuns/Uteis';
import Carregando from '../../comuns/Carregando';
import ProdutosHomeContext from './ProdutosHomeContext';
import ProdutosLista from './ProdutosLista';
import ProdutoDetalhe from './ProdutoDetalhe';
import { getAvalicaoesProdutoAPI, cadastraAvaliacaoAPI } from '../../../servicos/AvaliacaoServico';
import Alerta from '../../comuns/Alerta';

function ProdutosHome() {

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

    // para o produto detalhes
    const [produto, setProduto] = useState(null);

    const [exibeDetalhe, setExibeDetalhe] = useState(false);

    const exibirDetalhesProduto = (produto) => {
        setExibeDetalhe(true);
        setProduto(produto);
    }


    // para as avaliações 
	const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [avaliacoes, setAvaliacoes]  = useState([]);

    const recuperaAvaliacoes = async(codigoproduto) => {
        setAvaliacoes(await getAvalicaoesProdutoAPI(codigoproduto))
    }

    useEffect(() => {
        if (produto != null) {
            recuperaAvaliacoes(produto.codigo);     
        }
    }, [produto]);  
    
    const [avaliacao, setAvaliacao] = useState({codigo : 0, autor : "", 
    email: "", texto : "" , nota : "", data : "", produto : ""});

    const novaAvaliacao = () => {
        setAvaliacao({codigo : 0, autor : "", 
        email: "", texto : "" , nota : "", data :  new Date().toISOString().slice(0, 10), produto : produto.codigo})
    }

    const cadastrarAvaliacao = async e => {
        e.preventDefault();        
        try {
            let retornoAPI = await cadastraAvaliacaoAPI(avaliacao);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setAvaliacao(retornoAPI.objeto);            
        } catch (err) {
            console.error(err.message);
        }
        recuperaAvaliacoes(produto.codigo);
    }    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAvaliacao({ ...avaliacao, [name]: value });
    }    
	
    return (
        <ProdutosHomeContext.Provider value={
            {
                produtos, exibirDetalhesProduto, setExibeDetalhe, produto, 
                avaliacoes, avaliacao, novaAvaliacao, cadastrarAvaliacao, alerta, handleChange
            }
        }>
            <div style={{ padding: '20px' }}>
                <Carregando carregando={carregando}>
                    { !exibeDetalhe ? <ProdutosLista />: <ProdutoDetalhe/> }   
                </Carregando>
            </div>
        </ProdutosHomeContext.Provider>
    )

}

export default ProdutosHome;
