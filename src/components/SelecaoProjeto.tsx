import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { listarProjetos } from '../services/ProjetoService';
import { Picker } from '@react-native-picker/picker';


interface SelecaoProjetoProps {
  projetoId: string;
  onChange: (id: string) => void;
}

export default function SelecaoProjeto({ projetoId, onChange }: SelecaoProjetoProps) {
  const [projetos, setProjetos] = useState<{ id: string; titulo: string }[]>([]);

  useEffect(() => {
    async function carregar() {
      const lista = await listarProjetos();
      setProjetos(lista);
    }
    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filtrar por Projeto:</Text>
      <Picker selectedValue={projetoId} onValueChange={onChange} style={styles.picker}>
        <Picker.Item label="Todos" value="" />
        {projetos.map((p) => (
          <Picker.Item key={p.id} label={p.titulo} value={p.id} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
});
