import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CampoTexto from '../components/CampoTexto';
import SelecaoPrioridade from '../components/SelecaoPrioridade';
import BotaoPrimario from '../components/BotaoPrimario';
import SelecaoProjeto from '../components/SelecaoProjeto';
import { salvarTarefa } from '../services/TarefaService';
import { useNavigation } from '@react-navigation/native';

export default function NovaTarefaScreen() {
  const navigation = useNavigation<any>();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [prioridade, setPrioridade] = useState<'Baixa' | 'Média' | 'Alta'>('Baixa');
  const [projetoId, setProjetoId] = useState('');

  async function handleSalvar() {
    if (!titulo || !descricao || !dataVencimento) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos');
      return;
    }

    await salvarTarefa({
      titulo,
      descricao,
      dataVencimento,
      prioridade,
      status: 'Pendente',
      projetoId,
    });

    Alert.alert('Sucesso', 'Tarefa criada com sucesso');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nova Tarefa</Text>

      <CampoTexto label="Título" value={titulo} onChangeText={setTitulo} />
      <CampoTexto label="Descrição" value={descricao} onChangeText={setDescricao} />
      <CampoTexto
        label="Data de Vencimento"
        value={dataVencimento}
        onChangeText={setDataVencimento}
        placeholder="YYYY-MM-DD"
        tipo="date"
      />
      <SelecaoPrioridade value={prioridade} onChange={setPrioridade} />
      <SelecaoProjeto projetoId={projetoId} onChange={setProjetoId} />

      <BotaoPrimario titulo="Salvar Tarefa" onPress={handleSalvar} />
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
