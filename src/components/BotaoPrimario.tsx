import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoPrimarioProps {
  titulo: string;
  onPress: () => void;
  disabled?: boolean;
  variante?: 'solid' | 'outline';
}

export default function BotaoPrimario({
  titulo,
  onPress,
  disabled = false,
  variante = 'solid',
}: BotaoPrimarioProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.botao,
        variante === 'outline' && styles.outline,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.texto, variante === 'outline' && styles.textoVerde]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#006633',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#006633',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textoVerde: {
    color: '#006633',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
});
