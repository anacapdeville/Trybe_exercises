import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      residencia: '',
      resumo: '',
      cargo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.checkCity = this.checkCity.bind(this);
    this.cleanFormAndDiv = this.cleanFormAndDiv.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({[name]: name === "nome" ? event.target.value.toUpperCase() : event.target.value})
  }

  checkCity() {
    const firstLetter = this.state.cidade.split('')[0];
    const isNumber = isNaN(firstLetter);
    if (isNumber === false) {
      this.setState({cidade: ''})
    }
  }

  alertCareful() {
    alert('Preencha com cuidado esta informação.');
  }

  divDisplay() {
    const divDados = document.getElementById('div-dados');
    divDados.classList.remove('div-hidden');
    divDados.classList.add('div-shown');
  }

  cleanFormAndDiv() {
    this.setState=({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      residencia: '',
      resumo: '',
      cargo: ''
    });
    const divDados = document.getElementById('div-dados');
    divDados.classList.remove('div-shown');
    divDados.classList.add('div-hidden');
  }

  render() {
    return(
      <div>
        <form>
          <fieldset>
            <label>
              Nome:
              <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} maxLength="40" required />
            </label><br />
            <label>
              Email:
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} maxLength="50" required />
            </label><br />
            <label>
              CPF:
              <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange} maxLength="11" required />
            </label><br />
            <label>
              Endereço:
              <input type="text" name="endereco" value={this.state.endereco} onChange={this.handleChange} maxLength="200" required />
            </label><br />
            <label>
              Cidade:
              <input type="text" name="cidade" value={this.state.cidade} onChange={this.handleChange} maxLength="28" onBlur={this.checkCity} required />
            </label><br />
            <select name="estado" value={this.state.estado} onChange={this.handleChange} required>
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
              <input type="radio" value="Casa" name="residencia" onChange={this.handleChange} />
            </label>
            <label>
              Apartamento
              <input type="radio" value="Apartamento" name="residencia" onChange={this.handleChange} />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Resumo do currículo<br />
            <textarea value={this.state.resumo} name="resumo" onChange={this.handleChange} maxLength="1000" required />
            </label><br />
            <label>
              Cargo<br />
            <textarea value={this.state.cargo} name="cargo" onChange={this.handleChange} maxLength="40" required onMouseEnter={this.alertCareful} />
            </label><br />
            <label>
              Descrição do cargo: <br />
              <input type="text" name="descricao" value={this.state.descricao} onChange={this.handleChange} maxLength="500" required />
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
          Nome: {this.state.nome}<br />
          Email: {this.state.email}<br />
          CPF: {this.state.cpf}<br />
          Endereço: {this.state.endereco}<br />
          Cidade: {this.state.cidade}<br />
          Estado: {this.state.estado}<br />
          Tipo de casa: {this.state.residencia}<br /><br />
          Dados do último emprego<br /><br />
          Resumo do currículo: {this.state.resumo}<br />
          Cargo: {this.state.cargo}<br />
          Descrição do cargo: {this.state.descricao}
        </div>
      </div>
    )
  }
}

export default Form;