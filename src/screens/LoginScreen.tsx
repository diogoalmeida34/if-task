import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import CampoTexto from '../components/CampoTexto';
import BotaoPrimario from '../components/BotaoPrimario';
import { login } from '../services/AuthService';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<any>();

  async function handleLogin() {
    const sucesso = await login(email, senha);
    if (sucesso) {
      navigation.replace('MainTabs'); // Redireciona para o app principal
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IF Task</Text>
      <CampoTexto label="Email" value={email} onChangeText={setEmail} tipo="email" />
      <CampoTexto label="Senha" value={senha} onChangeText={setSenha} tipo="password" secureTextEntry />
      <BotaoPrimario titulo="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#006633',
  },
});
