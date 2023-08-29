import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import CategoriaContext from './CategoriaContext';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(CategoriaContext);

    return (
  
            <Dialogo id="modalEdicao" titulo="Categoria"
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
            </Dialogo>
    
    )
}

export default Form;