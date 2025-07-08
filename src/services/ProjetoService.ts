import AsyncStorage from '@react-native-async-storage/async-storage';
import { Projeto } from '../models/Projeto';
import { v4 as uuidv4 } from 'uuid';

const CHAVE_PROJETOS = 'PROJETOS';

export async function listarProjetos(): Promise<Projeto[]> {
  const json = await AsyncStorage.getItem(CHAVE_PROJETOS);
  return json ? JSON.parse(json) : [];
}

export async function salvarProjeto(projeto: Omit<Projeto, 'id'>): Promise<void> {
  const projetos = await listarProjetos();
  const novoProjeto: Projeto = { ...projeto, id: uuidv4() };
  projetos.push(novoProjeto);
  await AsyncStorage.setItem(CHAVE_PROJETOS, JSON.stringify(projetos));
}

export async function atualizarProjeto(projetoAtualizado: Projeto): Promise<void> {
  const projetos = await listarProjetos();
  const novos = projetos.map((p) => (p.id === projetoAtualizado.id ? projetoAtualizado : p));
  await AsyncStorage.setItem(CHAVE_PROJETOS, JSON.stringify(novos));
}

export async function excluirProjeto(id: string): Promise<void> {
  const projetos = await listarProjetos();
  const novos = projetos.filter((p) => p.id !== id);
  await AsyncStorage.setItem(CHAVE_PROJETOS, JSON.stringify(novos));
}
