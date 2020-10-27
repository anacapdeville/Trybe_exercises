const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  residencia: '',
  resumo: '',
  cargo: ''
};

function addName (state = INITIAL_STATE, action) {
  if (action.type === 'ADD_NAME') {
    return { ...state, [action.name]: action.value } 
  }
  else if (action.type === 'CLEAN') {
    return INITIAL_STATE;
  }
  return state;
}

export default addName;