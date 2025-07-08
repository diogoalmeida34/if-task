import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CampoTexto from '../components/CampoTexto';
import SelecaoPrioridade from '../components/SelecaoPrioridade';
import SelecaoProjeto from '../components/SelecaoProjeto';
import BotaoPrimario from '../components/BotaoPrimario';
import { listarTarefas, atualizarTarefa } from '../services/TarefaService';
import { Tarefa } from '../models/Tarefa';

export default function EditarTarefaScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const tarefaId = route.params?.id;

  const [tarefa, setTarefa] = useState<Tarefa | null>(null);
  const [projetoId, setProjetoId] = useState(''); // inicia vazio

  useEffect(() => {
    async function carregarTarefa() {
      const lista = await listarTarefas();
      const tarefaSelecionada = lista.find((t) => t.id === tarefaId);
      if (!tarefaSelecionada) {
        Alert.alert('Erro', 'Tarefa não encontrada');
        navigation.goBack();
        return;
      }
      setTarefa(tarefaSelecionada);
      setProjetoId(tarefaSelecionada.projetoId ?? ''); // inicializa só depois de carregar
    }
    carregarTarefa();
  }, []);

  async function handleSalvar() {
    if (!tarefa) return;

    if (!tarefa.titulo || !tarefa.descricao || !tarefa.dataVencimento) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios');
      return;
    }

    await atualizarTarefa({ ...tarefa, projetoId }); // inclui projetoId no salvamento
    Alert.alert('Sucesso', 'Tarefa atualizada com sucesso');
    navigation.goBack();
  }

  if (!tarefa) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Tarefa</Text>

      <CampoTexto label="Título" value={tarefa.titulo} onChangeText={(v) => setTarefa({ ...tarefa, titulo: v })} />
      <CampoTexto label="Descrição" value={tarefa.descricao} onChangeText={(v) => setTarefa({ ...tarefa, descricao: v })} />
      <CampoTexto
        label="Data de Vencimento"
        value={tarefa.dataVencimento}
        onChangeText={(v) => setTarefa({ ...tarefa, dataVencimento: v })}
        placeholder="YYYY-MM-DD"
        tipo="date"
      />
      <SelecaoPrioridade value={tarefa.prioridade} onChange={(v) => setTarefa({ ...tarefa, prioridade: v })} />
      <SelecaoProjeto projetoId={projetoId} onChange={setProjetoId} />

      <BotaoPrimario titulo="Salvar Alterações" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#006633',
  },
});
