import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import ProdutoContext from './ProdutoContext';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaCategorias } = useContext(ProdutoContext);

    return (

        <Dialogo id="modalEdicao" titulo="Produto"
            idform="formulario" acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada value={objeto.codigo}
                id="txtCodigo" name="codigo" label="Código"
                tipo="number" onchange={handleChange}
                msgvalido="" msginvalido=""
                requerido={false} readonly={true}
                maxCaracteres={5} />
            <CampoEntrada value={objeto.nome}
                id="txtNome" name="nome" label="Nome"
                tipo="text" onchange={handleChange}
                msgvalido="OK certo" msginvalido="Informe o nome"
                requerido={true} readonly={false}
                maxCaracteres={40} />
            <CampoEntrada value={objeto.descricao}
                id="txtDescricao" name="descricao" label="Descrição"
                tipo="text" onchange={handleChange}
                msgvalido="OK certo" msginvalido="Informe a descrição"
                requerido={false} readonly={false}
                maxCaracteres={200} />
            <CampoEntrada value={objeto.quantidade_estoque}
                id="txtEstoque" name="quantidade_estoque" label="Estoque"
                tipo="number" onchange={handleChange}
                msgvalido="OK certo" msginvalido="Informe a quantidade em estoque"
                requerido={true} readonly={false}
                maxCaracteres={5} />
            <CampoEntrada value={objeto.valor}
                id="txtValor" name="valor" label="Preço"
                tipo="number" onchange={handleChange}
                msgvalido="OK certo" msginvalido="Informe o preço"
                requerido={true} readonly={false}
                maxCaracteres={12} />
            <CampoSelect value={objeto.ativo}
                id="txtAtivo" name="ativo" label="Ativo"
                onchange={handleChange}
                msgvalido="OK certo" msginvalido="Informe se está ativo"
                requerido={true}>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
            </CampoSelect>
            <CampoSelect value={objeto.categoria}
                id="txtCategoria" name="categoria" label="Categoria"
                onchange={handleChange}
                msgvalido="OK certo" msginvalido="Informe a categoria"
                requerido={true}>
                {listaCategorias.map((cat) => (
                    <option key={cat.codigo} value={cat.codigo}>
                        {cat.nome}
                    </option>
                ))}
            </CampoSelect>
            <CampoEntrada value={objeto.data_cadastro}
                id="txtDataCadastro" name="data_cadastro" label="Data de Cadastro"
                tipo="date" onchange={handleChange}
                msgvalido="OK certo" msginvalido="Informe a data de cadastro"
                requerido={true} readonly={false}
                maxCaracteres={12} />            
        </Dialogo>

    )
}

export default Form;