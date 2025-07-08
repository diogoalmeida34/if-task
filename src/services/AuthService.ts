// Serviço de autenticação

import AsyncStorage from '@react-native-async-storage/async-storage';

const USUARIO_PADRAO = {
  email: 'diogo@ifsp.edu.br',
  senha: '123456', // senha simples só para simulação
};

const CHAVE_LOGIN = '@if_task:usuario_logado';

export async function login(email: string, senha: string): Promise<boolean> {
  if (email === USUARIO_PADRAO.email && senha === USUARIO_PADRAO.senha) {
    await AsyncStorage.setItem(CHAVE_LOGIN, JSON.stringify({ email }));
    return true;
  }
  else if (email.trim() === '' || senha.trim() === '') {
    throw new Error('Email e senha não podem estar vazios');
  }
  return false;
}

export async function logout() {
  await AsyncStorage.removeItem(CHAVE_LOGIN);
}

export async function usuarioLogado(): Promise<{ email: string } | null> {
  const dados = await AsyncStorage.getItem(CHAVE_LOGIN);
  return dados ? JSON.parse(dados) : null;
}
