import { useState, useEffect } from 'react';
import ProdutoContext from './ProdutoContext';
import Tabela from './Tabela';
import Form from './Form';
import { getCategoriasAPI } from '../../../servicos/CategoriaServico'; 
import { getProdutosAPI, getProdutoPorCodigoAPI, deleteProdutoPorCodigoAPI, cadastraProdutoAPI} from '../../../servicos/ProdutoServico'
import Carregando from '../../comuns/Carregando';

function Produto() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        codigo: "", nome: "", descricao: "", sigla: ""
    })
    const [carregando, setCarregando] = useState(true);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            codigo: 0,
            nome: "", 
            descricao : "",
            quantidade_estoque : null, 
            valor : null,
            ativo : null,
            data_cadastro : new Date().toISOString().slice(0, 10),
            categoria : ""
        });
    }

    const editarObjeto = async codigo => {
        setObjeto(await getProdutoPorCodigoAPI(codigo))
        setEditar(true);
        setAlerta({ status: "", message: "" });
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraProdutoAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.error(err.message);
        }
        recuperaProdutos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaProdutos = async () => {
        setCarregando(true);
        setListaObjetos(await getProdutosAPI());
        setCarregando(false);
    }

    const recuperaCategorias = async () => {        
        setListaCategorias(await getCategoriasAPI());        
    }    

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteProdutoPorCodigoAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message })
            recuperaProdutos();
        }
    }

    useEffect(() => {
        recuperaCategorias();
        recuperaProdutos();
    }, []);

    return (
        <ProdutoContext.Provider value={
            {
                alerta, setAlerta,
                listaObjetos,
                remover,
                objeto,
                editar,
                acaoCadastrar,
                handleChange, novoObjeto, editarObjeto, listaCategorias
            }
        }>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Form />
        </ProdutoContext.Provider>
    );
}

export default Produto;