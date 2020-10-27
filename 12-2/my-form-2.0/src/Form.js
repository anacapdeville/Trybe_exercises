import React from 'react';
import { getName, cleanState } from './actions';
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.cleanFormAndDiv = this.cleanFormAndDiv.bind(this);
  }

  // checkCity() {
  //   const firstLetter = this.state.cidade.split('')[0];
  //   const isNumber = isNaN(firstLetter);
  //   if (isNumber === false) {
  //     this.setState({cidade: ''})
  //   }
  // }

  // alertCareful() {
  //   alert('Preencha com cuidado esta informação.');
  // }

  divDisplay() {
    const divDados = document.getElementById('div-dados');
    divDados.classList.remove('div-hidden');
    divDados.classList.add('div-shown');
  }

  cleanFormAndDiv() {
    this.props.clean();
    const divDados = document.getElementById('div-dados');
    divDados.classList.remove('div-shown');
    divDados.classList.add('div-hidden');
  }

  render() {
    const { adicionarNome, information } = this.props;
    return(
      <div>
        <form>
          <fieldset>
            <label>
              Nome:
              <input type="text" name="nome" onChange={(event) => adicionarNome(event.target.name, event.target.value)} maxLength="40" required />
            </label><br />
            <label>
              Email:
              <input type="text" name="email" onChange={(event) => adicionarNome(event.target.name, event.target.value)} maxLength="50" required />
            </label><br />
            <label>
              CPF:
              <input type="text" name="cpf" onChange={(event) => adicionarNome(event.target.name, event.target.value)} maxLength="11" required />
            </label><br />
            <label>
              Endereço:
              <input type="text" name="endereco" onChange={(event) => adicionarNome(event.target.name, event.target.value)} maxLength="200" required />
            </label><br />
            <label>
              Cidade:
              <input type="text" name="cidade" onChange={(event) => adicionarNome(event.target.name, event.target.value)} maxLength="28" required />
            </label><br />
            <select name="estado" onChange={(event) => adicionarNome(event.target.name, event.target.value)} required>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select><br />
            <label>
              Casa
              <input type="radio" value="Casa" name="residencia" onChange={(event) => adicionarNome(event.target.name, event.target.value)} />
            </label>
            <label>
              Apartamento
              <input type="radio" value="Apartamento" name="residencia" onChange={(event) => adicionarNome(event.target.name, event.target.value)} />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Resumo do currículo<br />
            <textarea name="resumo" onChange={(event) => adicionarNome(event.target.name, event.target.value)} maxLength="1000" required />
            </label><br />
            <label>
              Cargo<br />
            <textarea name="cargo" onChange={(event) => adicionarNome(event.target.name, event.target.value)} maxLength="40" required />
            </label><br />
            <label>
              Descrição do cargo: <br />
              <input type="text" name="descricao" onChange={(event) => adicionarNome(event.target.name, event.target.value)} maxLength="500" required />
            </label><br />
          </fieldset>
        </form>
        <br />
        <button onClick={this.divDisplay}>Mostrar dados</button>
        <br />
        <button onClick={this.cleanFormAndDiv}>Limpar formulário</button>
        <br /><br />
        <div id="div-dados" className="div-hidden">
          Dados pessoais<br /><br />
          Nome: {information.nome}<br />
          Email: {information.email}<br />
          CPF: {information.cpf}<br />
          Endereço: {information.endereco}<br />
          Cidade: {information.cidade}<br />
          Estado: {information.estado}<br />
          Tipo de casa: {information.residencia}<br /><br />
          Dados do último emprego<br /><br />
          Resumo do currículo: {information.resumo}<br />
          Cargo: {information.cargo}<br />
          Descrição do cargo: {information.descricao}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  adicionarNome: (name, value) => dispatch(getName(name, value)),
  clean: () => dispatch(cleanState())
})

const mapStateToProps = (state) => ({
  information: state.addName
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
