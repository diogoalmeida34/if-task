import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface CampoTextoProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  tipo?: 'text' | 'email' | 'password' | 'date';
  secureTextEntry?: boolean;
}

export default function CampoTexto({
  label,
  placeholder,
  value,
  onChangeText,
  tipo = 'text',
  secureTextEntry = false,
}: CampoTextoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        keyboardType={tipo === 'email' ? 'email-address' : 'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
  },
});
