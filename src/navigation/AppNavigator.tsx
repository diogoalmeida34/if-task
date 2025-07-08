import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';

import ListaTarefasScreen from '../screens/ListaTarefasScreen';
import NovaTarefaScreen from '../screens/NovaTarefaScreen';
import EditarTarefaScreen from '../screens/EditarTarefaScreen';

import ProjetosScreen from '../screens/ProjetosScreen';
import NovoProjetoScreen from '../screens/NovoProjetoScreen';
import EditarProjetoScreen from '../screens/EditarProjetoScreen';

import ConfiguracoesScreen from '../screens/ConfiguracoesScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TarefaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaTarefas" component={ListaTarefasScreen} options={{ title: 'Tarefas' }} />
      <Stack.Screen name="NovaTarefa" component={NovaTarefaScreen} options={{ title: 'Nova Tarefa' }} />
      <Stack.Screen name="EditarTarefa" component={EditarTarefaScreen} options={{ title: 'Editar Tarefa' }} />
    </Stack.Navigator>
  );
}

function ProjetoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Projetos" component={ProjetosScreen} options={{ title: 'Projetos' }} />
      <Stack.Screen name="NovoProjeto" component={NovoProjetoScreen} options={{ title: 'Novo Projeto' }} />
      <Stack.Screen name="EditarProjeto" component={EditarProjetoScreen} options={{ title: 'Editar Projeto' }} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: RouteProp<ParamListBase, string> }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primario,
        tabBarInactiveTintColor: theme.colors.cinza,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          paddingBottom: 6,
          paddingTop: 6,
          height: 64,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 2,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIcon: ({ color }: { color: string; size: number }) => {
          let iconName: keyof typeof MaterialIcons.glyphMap;

          switch (route.name) {
            case 'TarefasTab':
              iconName = 'check-circle';
              break;
            case 'ProjetosTab':
              iconName = 'folder';
              break;
            case 'Configuracoes':
              iconName = 'settings';
              break;
            default:
              iconName = 'home';
          }

          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen name="TarefasTab" component={TarefaStack} options={{ title: 'Tarefas' }} />
      <Tab.Screen name="ProjetosTab" component={ProjetoStack} options={{ title: 'Projetos' }} />
      <Tab.Screen name="Configuracoes" component={ConfiguracoesScreen} options={{ title: 'Configurações' }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
