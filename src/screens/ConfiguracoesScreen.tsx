import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BotaoPrimario from '../components/BotaoPrimario';
import { useNavigation } from '@react-navigation/native';

export default function ConfiguracoesScreen() {
  const navigation = useNavigation<any>();

  function handleLogout() {
    Alert.alert('Sair', 'Deseja realmente sair?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: () => {
          // Para web, redireciona a url para a página de login
          if (typeof window !== 'undefined') {
            window.location.href = '/login'; // ajustar se precisar
          } else {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }
        },
      },
    ]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <BotaoPrimario titulo="Sair" onPress={handleLogout} variante="outline" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006633',
    marginBottom: 20,
  },
});
