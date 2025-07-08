import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ModalConfirmacaoProps {
  visivel: boolean;
  mensagem: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ModalConfirmacao({
  visivel,
  mensagem,
  onConfirm,
  onCancel,
}: ModalConfirmacaoProps) {
  return (
    <Modal transparent visible={visivel} animationType="fade">
      <View style={styles.fundo}>
        <View style={styles.modal}>
          <Text style={styles.mensagem}>{mensagem}</Text>

          <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoCancelar} onPress={onCancel}>
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoConfirmar} onPress={onConfirm}>
              <Text style={styles.textoBotao}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  mensagem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoCancelar: {
    backgroundColor: '#999',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginRight: 10,
  },
  botaoConfirmar: {
    backgroundColor: '#E53935',
    padding: 10,
    borderRadius: 6,
    flex: 1,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
