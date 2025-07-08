import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProjetoProps {
  projeto: {
    id: string;
    titulo: string;
    descricao: string;
  };
  onPress: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function CardProjeto({ projeto, onPress, onDelete }: CardProjetoProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(projeto.id)}>
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{projeto.titulo}</Text>
        <Text style={styles.descricao}>{projeto.descricao}</Text>
      </View>
      <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={() => onDelete(projeto.id)}
      >
        <Text style={styles.textoExcluir}>Excluir</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e6f2e6',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006633',
  },
  descricao: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  botaoExcluir: {
    backgroundColor: '#cc3333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  textoExcluir: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
