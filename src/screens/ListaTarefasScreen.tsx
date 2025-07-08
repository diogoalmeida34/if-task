import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { listarTarefas, excluirTarefa } from '../services/TarefaService';
import { Tarefa } from '../models/Tarefa';
import CardTarefa from '../components/CardTarefa';
import BotaoPrimario from '../components/BotaoPrimario';
import SelecaoProjeto from '../components/SelecaoProjeto';
import ModalConfirmacao from '../components/ModalConfirmacao';

export default function ListaTarefasScreen() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [projetoIdFiltro, setProjetoIdFiltro] = useState('');
  const navigation = useNavigation<any>();
  const [modalVisivel, setModalVisivel] = useState(false);
  const [tarefaParaExcluir, setTarefaParaExcluir] = useState<string | null>(null);

  async function carregarTarefas() {
    const todas = await listarTarefas();
    const filtradas = projetoIdFiltro
      ? todas.filter((t) => t.projetoId === projetoIdFiltro)
      : todas;
    setTarefas(filtradas);
  }

  useFocusEffect(
    useCallback(() => {
      carregarTarefas();
    }, [projetoIdFiltro])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <SelecaoProjeto projetoId={projetoIdFiltro} onChange={setProjetoIdFiltro} />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardTarefa
            tarefa={item}
            onPress={(id) => navigation.navigate('EditarTarefa', { id })}
            onDelete={(id) => {
              setTarefaParaExcluir(id);
              setModalVisivel(true);
            }}
          />
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa encontrada.</Text>}
      />

      <BotaoPrimario titulo="Adicionar Tarefa" onPress={() => navigation.navigate('NovaTarefa')} />

      <ModalConfirmacao
        visivel={modalVisivel}
        mensagem="Deseja realmente excluir esta tarefa?"
        onCancel={() => setModalVisivel(false)}
        onConfirm={async () => {
          if (tarefaParaExcluir) {
            await excluirTarefa(tarefaParaExcluir);
            setModalVisivel(false);
            setTarefaParaExcluir(null);
            carregarTarefas();
          }
        }}
      />
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
    color: '#006633',
    marginBottom: 12,
  },
  vazio: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
});
