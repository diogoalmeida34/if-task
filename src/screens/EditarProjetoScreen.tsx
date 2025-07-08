import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CampoTexto from '../components/CampoTexto';
import BotaoPrimario from '../components/BotaoPrimario';
import { listarProjetos, atualizarProjeto } from '../services/ProjetoService';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Projeto } from '../models/Projeto';

export default function EditarProjetoScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const projetoId = route.params?.id;

  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    async function carregarProjeto() {
      const projetos = await listarProjetos();
      const encontrado = projetos.find((p) => p.id === projetoId);
      if (!encontrado) {
        Alert.alert('Erro', 'Projeto não encontrado');
        navigation.goBack();
        return;
      }
      setProjeto(encontrado);
      setTitulo(encontrado.titulo);
      setDescricao(encontrado.descricao);
    }
    carregarProjeto();
  }, [projetoId]);

  async function handleSalvar() {
    if (!titulo || !descricao) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos');
      return;
    }
    if (!projeto) return;

    await atualizarProjeto({
      id: projeto.id,
      titulo,
      descricao,
    });

    Alert.alert('Sucesso', 'Projeto atualizado com sucesso');
    navigation.goBack();
  }

  if (!projeto) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Projeto</Text>

      <CampoTexto label="Título" value={titulo} onChangeText={setTitulo} />
      <CampoTexto label="Descrição" value={descricao} onChangeText={setDescricao} />

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
    color: '#006633',
    marginBottom: 16,
  },
});
