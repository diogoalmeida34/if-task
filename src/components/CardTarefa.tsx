import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Tarefa } from '../models/Tarefa';

interface CardTarefaProps {
  tarefa: Tarefa;
  onPress: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function CardTarefa({ tarefa, onPress, onDelete }: CardTarefaProps) {
  const corPrioridade = {
    Baixa: '#A8D5BA',
    Média: '#FFD580',
    Alta: '#FF8A80',
  };

  return (
    <View style={[styles.card, { borderLeftColor: corPrioridade[tarefa.prioridade] }]}>
      <TouchableOpacity style={styles.conteudo} onPress={() => onPress(tarefa.id)}>
        <Text style={styles.titulo}>{tarefa.titulo}</Text>
        <Text style={styles.descricao}>{tarefa.descricao}</Text>
        <Text style={styles.info}>📅 Vencimento: {tarefa.dataVencimento}</Text>
        <Text style={styles.info}>🔥 Prioridade: {tarefa.prioridade}</Text>
        <Text style={styles.info}>📌 Status: {tarefa.status}</Text>
      </TouchableOpacity>

      <View style={styles.botoes}>
        <TouchableOpacity onPress={() => onPress(tarefa.id)} style={styles.botaoEditar}>
          <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(tarefa.id)} style={styles.botaoExcluir}>
          <Text style={styles.textoBotao}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    borderLeftWidth: 6,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  conteudo: {
    marginBottom: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  info: {
    fontSize: 12,
    color: '#444',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  botaoEditar: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  botaoExcluir: {
    backgroundColor: '#E53935',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
