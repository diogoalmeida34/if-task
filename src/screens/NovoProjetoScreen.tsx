import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CampoTexto from '../components/CampoTexto';
import BotaoPrimario from '../components/BotaoPrimario';
import { salvarProjeto } from '../services/ProjetoService';
import { useNavigation } from '@react-navigation/native';

export default function NovoProjetoScreen() {
  const navigation = useNavigation<any>();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  async function handleSalvar() {
    console.log('handleSalvar foi chamado'); // Teste no console do Expo

    if (!titulo.trim() || !descricao.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos');
      return;
    }

    await salvarProjeto({
      titulo: titulo.trim(),
      descricao: descricao.trim(),
    });

    Alert.alert('Sucesso', 'Projeto criado com sucesso');
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Novo Projeto</Text>

        <CampoTexto label="Título" value={titulo} onChangeText={setTitulo} />
        <CampoTexto label="Descrição" value={descricao} onChangeText={setDescricao} />

        <BotaoPrimario titulo="Salvar Projeto" onPress={handleSalvar} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006633',
    marginBottom: 16,
    textAlign: 'center',
  },
});
