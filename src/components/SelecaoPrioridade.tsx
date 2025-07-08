import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SelecaoPrioridadeProps {
  value: 'Baixa' | 'Média' | 'Alta';
  onChange: (prioridade: 'Baixa' | 'Média' | 'Alta') => void;
}

export default function SelecaoPrioridade({ value, onChange }: SelecaoPrioridadeProps) {
  const opcoes = ['Baixa', 'Média', 'Alta'] as const;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Prioridade</Text>
      <View style={styles.opcoes}>
        {opcoes.map((opcao) => (
          <TouchableOpacity
            key={opcao}
            style={[
              styles.botao,
              value === opcao && styles.selecionado,
            ]}
            onPress={() => onChange(opcao)}
          >
            <Text
              style={[
                styles.texto,
                value === opcao && styles.textoSelecionado,
              ]}
            >
              {opcao}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  opcoes: {
    flexDirection: 'row',
    gap: 8,
  },
  botao: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
  },
  selecionado: {
    backgroundColor: '#006633',
    borderColor: '#006633',
  },
  texto: {
    color: '#333',
  },
  textoSelecionado: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
