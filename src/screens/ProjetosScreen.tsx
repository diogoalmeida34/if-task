import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { listarProjetos, excluirProjeto } from '../services/ProjetoService';
import { Projeto } from '../models/Projeto';
import CardProjeto from '../components/CardProjeto';
import BotaoPrimario from '../components/BotaoPrimario';
import ModalConfirmacao from '../components/ModalConfirmacao';

export default function ProjetosScreen() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const navigation = useNavigation<any>();
  const [modalVisivel, setModalVisivel] = useState(false);
  const [projetoParaExcluir, setProjetoParaExcluir] = useState<string | null>(null);

  async function carregarProjetos() {
    const lista = await listarProjetos();
    setProjetos(lista);
  }

  useFocusEffect(
    useCallback(() => {
      carregarProjetos();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Projetos</Text>

      <FlatList
        data={projetos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardProjeto
            projeto={item}
            onPress={(id) => navigation.navigate('EditarProjeto', { id })}
            onDelete={(id) => {
              setProjetoParaExcluir(id);
              setModalVisivel(true);
            }}
          />
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum projeto encontrado.</Text>}
      />

      <BotaoPrimario titulo="Adicionar Projeto" onPress={() => navigation.navigate('NovoProjeto')} />

      <ModalConfirmacao
        visivel={modalVisivel}
        mensagem="Deseja realmente excluir este projeto?"
        onCancel={() => setModalVisivel(false)}
        onConfirm={async () => {
          if (projetoParaExcluir) {
            await excluirProjeto(projetoParaExcluir);
            setModalVisivel(false);
            setProjetoParaExcluir(null);
            carregarProjetos();
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
