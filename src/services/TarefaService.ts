import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tarefa } from '../models/Tarefa';
import { v4 as uuidv4 } from 'uuid';

const CHAVE_TAREFAS = 'TAREFAS';

export async function listarTarefas(): Promise<Tarefa[]> {
  const json = await AsyncStorage.getItem(CHAVE_TAREFAS);
  return json ? JSON.parse(json) : [];
}

export async function salvarTarefa(tarefa: Omit<Tarefa, 'id'>): Promise<void> {
  const tarefas = await listarTarefas();
  const novaTarefa: Tarefa = { ...tarefa, id: uuidv4() };
  tarefas.push(novaTarefa);
  await AsyncStorage.setItem(CHAVE_TAREFAS, JSON.stringify(tarefas));
}

export async function atualizarTarefa(tarefaAtualizada: Tarefa): Promise<void> {
  const tarefas = await listarTarefas();
  const novas = tarefas.map((t) => (t.id === tarefaAtualizada.id ? tarefaAtualizada : t));
  await AsyncStorage.setItem(CHAVE_TAREFAS, JSON.stringify(novas));
}

export async function excluirTarefa(id: string): Promise<void> {
  const tarefas = await listarTarefas();
  const novas = tarefas.filter((t) => t.id !== id);
  await AsyncStorage.setItem(CHAVE_TAREFAS, JSON.stringify(novas));
}
