// src/styles/global.ts
import { StyleSheet } from 'react-native';
import theme from './theme';

const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.fundo,
    padding: theme.spacing.medio,
  },
  titulo: {
    fontSize: theme.fontSizes.titulo,
    fontWeight: 'bold',
    color: theme.colors.primario,
    marginBottom: theme.spacing.medio,
  },
  texto: {
    fontSize: theme.fontSizes.texto,
    color: theme.colors.texto,
  },
  botaoPrimario: {
    backgroundColor: theme.colors.primario,
    padding: theme.spacing.pequeno,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
  },
  textoBotaoPrimario: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default global;
